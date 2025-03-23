// neoScript.js

document.addEventListener("DOMContentLoaded", function () {
  // We assume neoData is already loaded from neoData.js

  // References to HTML elements
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");
  const sectionSelectors = document.querySelectorAll(".sectionSelector");

  // Each section's container
  const specsContainer = document.getElementById("specificationsContent");
  const progContainer = document.getElementById("programmingContent");
  const troubleContainer = document.getElementById("troubleshootingContent");
  const reportContainer = document.getElementById("reportingCodesContent");
  const wordLibContainer = document.getElementById("wordLibraryContent");
  const powerCalcContainer = document.getElementById("powerCalcContent");
  const docContainer = document.getElementById("documentationContent");

  // We'll store references in an object for convenience
  const sectionMap = {
    "Specifications": {
      data: neoData["Specifications"],
      container: specsContainer
    },
    "Programming": {
      data: neoData["Programming"],
      container: progContainer
    },
    "Troubleshooting": {
      data: neoData["Troubleshooting"],
      container: troubleContainer
    },
    "Reporting Codes": {
      data: neoData["Reporting Codes"],
      container: reportContainer
    },
    "Word Library": {
      data: neoData["Word Library"],
      container: wordLibContainer
    },
    "Power Consumption Calculator": {
      data: neoData["Power Consumption Calculator"],
      container: powerCalcContainer
    },
    "Documentation": {
      data: neoData["Documentation"],
      container: docContainer
    }
  };

  // 1) Build each section's collapsible tree
  Object.keys(sectionMap).forEach((sectionName) => {
    const info = sectionMap[sectionName];
    buildTree(info.data, info.container);
  });

  // 2) Hook up search button & "Enter" key
  searchButton.addEventListener("click", doSearch);
  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      doSearch();
    }
  });

  // 3) Clear button
  clearButton.addEventListener("click", () => {
    searchBox.value = "";
    clearHighlights();
    collapseAll();
    uncheckAll();
    outputText.value = "";
  });

  // 4) Collapse All button
  collapseAllBtn.addEventListener("click", () => {
    collapseAll();
    // Also hide any .descBox that might be open
    hideAllDescriptions();
  });

  // 5) Generate button (optional)
  generateButton.addEventListener("click", () => {
    let textResult = "";
    // We'll gather from each section's top container
    Object.keys(sectionMap).forEach((secName) => {
      const container = sectionMap[secName].container;
      textResult += buildSelectedHierarchy(container, 0);
    });
    outputText.value = textResult;
  });

  // 6) Ensure child check => parent check
  // We'll watch each "sectionContent" for changes
  document.body.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox") && e.target.checked) {
      checkParents(e.target);
    }
  });

  /***************************************************************
   * doSearch()
   *   - Identify which sections are selected (via .sectionSelector checkboxes)
   *   - Clear existing highlights / selections
   *   - For each selected section, highlight matches
   *   - Expand the matching items
   ***************************************************************/
  function doSearch() {
    const query = searchBox.value.trim();
    if (!query) return;

    uncheckAll();
    clearHighlights();
    collapseAll();
    hideAllDescriptions();

    // Which sections are checked?
    const activeSections = [];
    sectionSelectors.forEach((chk) => {
      if (chk.checked) activeSections.push(chk.value);
    });
    if (activeSections.length === 0) return; // nothing to search in

    // Perform the highlight + expand for each selected section
    activeSections.forEach((secName) => {
      const container = sectionMap[secName].container;
      performSearch(query, container);
    });
  }

  /***************************************************************
   * buildTree(obj, container)
   * Recursively builds the collapsible tree from 'obj'
   ***************************************************************/
  function buildTree(obj, container) {
    // If it's not an object, do nothing
    if (typeof obj !== "object" || obj === null) return;

    Object.keys(obj).forEach((key) => {
      if (key === "Description") {
        // Skip building a child for the "Description" property here,
        // because we'll handle it as a hidden text below.
        return;
      }

      const val = obj[key];

      // If there's a Description on this child, store it
      let childDesc = "";
      if (typeof val === "object" && val !== null && "Description" in val) {
        childDesc = val.Description;
        // remove it so we don't parse it again as a sub-node
        delete val.Description;
      }

      // Make a .section
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      // Header
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("section-header");
      sectionDiv.appendChild(headerDiv);

      // Checkbox
      const chk = document.createElement("input");
      chk.type = "checkbox";
      chk.classList.add("itemCheckbox");
      headerDiv.appendChild(chk);

      // Toggle button
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "+";
      headerDiv.appendChild(toggleBtn);

      // Label
      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      // (i) info
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Toggle description";
      headerDiv.appendChild(infoBtn);

      // Content
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // descBox if we have childDesc
      let descBox = null;
      if (childDesc) {
        descBox = document.createElement("div");
        descBox.classList.add("descBox");
        descBox.style.display = "none";
        descBox.textContent = childDesc;
        // insert it before contentDiv
        sectionDiv.insertBefore(descBox, contentDiv);
      }

      // If val is an object, build recursively
      if (typeof val === "object" && val !== null) {
        buildTree(val, contentDiv);
        // Toggle expand
        toggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (contentDiv.classList.contains("open")) {
            contentDiv.classList.remove("open");
            toggleBtn.textContent = "+";
          } else {
            contentDiv.classList.add("open");
            toggleBtn.textContent = "-";
          }
        });
      } else {
        // It's just a leaf node; no subobject
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }

      // Info button toggles descBox
      infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (descBox) {
          descBox.style.display = descBox.style.display === "none" ? "block" : "none";
        }
      });
    });
  }

  /***************************************************************
   * performSearch(query, container)
   *   - highlight matches in that container
   *   - expand parents
   ***************************************************************/
  function performSearch(query, container) {
    const tokens = query.toLowerCase().split(/\s+/);
    // find all .section-header in container
    const allHeaders = container.querySelectorAll(".section-header");

    allHeaders.forEach((headerDiv) => {
      const labelSpan = headerDiv.querySelector("span:not([style])");
      if (!labelSpan) return;
      const text = labelSpan.textContent.toLowerCase();

      const isMatch = tokens.every(t => text.includes(t));
      if (isMatch) {
        highlightSpan(labelSpan, tokens);
        expandParents(headerDiv);
      }
    });
  }

  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach((t) => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, (m) => `<span class="highlight">${m}</span>`);
    });
    span.innerHTML = html;
  }

  function expandParents(headerDiv) {
    let currentSection = headerDiv.closest(".section");
    while (currentSection) {
      const parentContent = currentSection.parentElement;
      if (parentContent && parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");
        // set parent's toggle to '-'
        const parentHeader = parentContent.previousElementSibling;
        if (parentHeader) {
          const btn = parentHeader.querySelector("button");
          if (btn && !btn.disabled) {
            btn.textContent = "-";
          }
        }
      }
      currentSection = parentContent?.closest(".section");
    }
  }

  /***************************************************************
   * clearHighlights()
   ***************************************************************/
  function clearHighlights() {
    const highlights = document.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  /***************************************************************
   * collapseAll()
   ***************************************************************/
  function collapseAll() {
    const allContents = document.querySelectorAll(".section-content");
    allContents.forEach(div => div.classList.remove("open"));
    const allToggles = document.querySelectorAll(".section-header button");
    allToggles.forEach(btn => {
      if (!btn.disabled) btn.textContent = "+";
    });
  }

  /***************************************************************
   * hideAllDescriptions()
   *   - hides all .descBox
   ***************************************************************/
  function hideAllDescriptions() {
    const allDesc = document.querySelectorAll(".descBox");
    allDesc.forEach(d => d.style.display = "none");
  }

  /***************************************************************
   * uncheckAll()
   *   - unchecks all .itemCheckbox
   ***************************************************************/
  function uncheckAll() {
    const checkboxes = document.querySelectorAll(".itemCheckbox");
    checkboxes.forEach(chk => {
      chk.checked = false;
    });
  }

  /***************************************************************
   * checkParents(childCheckbox)
   *   - if child is checked, also check all ancestors
   ***************************************************************/
  function checkParents(childCheckbox) {
    let parent = childCheckbox.closest(".section").parentElement;
    while (parent && parent.id !== "specificationsContent"
                  && parent.id !== "programmingContent"
                  && parent.id !== "troubleshootingContent"
                  && parent.id !== "reportingCodesContent"
                  && parent.id !== "wordLibraryContent"
                  && parent.id !== "powerCalcContent"
                  && parent.id !== "documentationContent") {
      const parentSection = parent.closest(".section");
      if (parentSection) {
        const parentCheckbox = parentSection.querySelector(".itemCheckbox");
        if (parentCheckbox) {
          parentCheckbox.checked = true;
        }
      }
      parent = parentSection?.parentElement;
    }
  }

  /***************************************************************
   * buildSelectedHierarchy(container, depth)
   *   - Recursively gather text for checked items, plus children
   ***************************************************************/
  function buildSelectedHierarchy(container, depth) {
    let result = "";
    const sections = container.querySelectorAll(":scope > .section");
    sections.forEach(section => {
      const header = section.querySelector(":scope > .section-header");
      const content = section.querySelector(":scope > .section-content");
      const checkbox = header.querySelector(".itemCheckbox");

      // Recurse children
      const childLines = buildSelectedHierarchy(content, depth + 1);

      if (checkbox.checked || childLines.trim().length > 0) {
        const labelSpan = header.querySelector("span:not([style])");
        const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";
        result += " ".repeat(depth * 4) + label + "\n";
        result += childLines;
      }
    });
    return result;
  }

});
