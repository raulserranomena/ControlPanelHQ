// neoScript.js

document.addEventListener("DOMContentLoaded", function () {
  // 1) Grab references
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");

  // 7 checkboxes for each section
  const sectionSelectors = document.querySelectorAll(".sectionSelector");
  const selectAllSections = document.getElementById("selectAllSections");

  // The containers where we will build the collapsible trees
  const specsContainer = document.getElementById("specificationsContent");
  const progContainer = document.getElementById("programmingContent");
  const troubleContainer = document.getElementById("troubleshootingContent");
  const reportContainer = document.getElementById("reportingCodesContent");
  const wordLibContainer = document.getElementById("wordLibContent");
  const powerCalcContainer = document.getElementById("powerCalcContent");
  const docContainer = document.getElementById("documentationContent");

  // 2) Build each section's tree
  buildTree(neoSpecData, specsContainer);
  buildTree(neoProgData, progContainer); // This is your old "Programming" data
  buildTree(neoTroubleData, troubleContainer);
  buildTree(neoReportData, reportContainer);
  buildTree(neoWordLibData, wordLibContainer);
  buildTree(neoPowerCalcData, powerCalcContainer);
  buildTree(neoDocData, docContainer);

  // 3) Add event listeners
  searchButton.addEventListener("click", doSearch);
  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      doSearch();
    }
  });

  clearButton.addEventListener("click", () => {
    searchBox.value = "";
    clearHighlights();
    collapseAll();
    uncheckAll();
    outputText.value = "";
  });

  collapseAllBtn.addEventListener("click", () => {
    collapseAll();
    hideAllDescriptions();
  });

  generateButton.addEventListener("click", () => {
    let textResult = "";
    // gather from all 7 containers
    textResult += buildSelectedHierarchy(specsContainer, 0);
    textResult += buildSelectedHierarchy(progContainer, 0);
    textResult += buildSelectedHierarchy(troubleContainer, 0);
    textResult += buildSelectedHierarchy(reportContainer, 0);
    textResult += buildSelectedHierarchy(wordLibContainer, 0);
    textResult += buildSelectedHierarchy(powerCalcContainer, 0);
    textResult += buildSelectedHierarchy(docContainer, 0);
    outputText.value = textResult;
  });

  // “Check a child => also check its parents” logic
  document.body.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox") && e.target.checked) {
      checkParents(e.target);
    }
  });

  // 4) “Select All / Unselect All” for sections
  selectAllSections.addEventListener("change", () => {
    // if we just checked it, select all; if we unchecked it, unselect all
    const check = selectAllSections.checked;
    sectionSelectors.forEach(chk => {
      chk.checked = check;
    });
  });

  /***************************************************************
   * doSearch(): searches only within selected sections
   ***************************************************************/
  function doSearch() {
    const query = searchBox.value.trim();
    if (!query) return;

    // Clear old highlights, uncheck boxes, collapse everything
    uncheckAll();
    clearHighlights();
    collapseAll();
    hideAllDescriptions();

    // Which sections are active?
    const activeSections = [];
    sectionSelectors.forEach(chk => {
      if (chk.checked) activeSections.push(chk.value);
    });
    if (activeSections.length === 0) return; // No sections selected

    // search each relevant container
    activeSections.forEach(sectionName => {
      if (sectionName === "Specifications") performSearch(query, specsContainer);
      else if (sectionName === "Programming") performSearch(query, progContainer);
      else if (sectionName === "Troubleshooting") performSearch(query, troubleContainer);
      else if (sectionName === "Reporting Codes") performSearch(query, reportContainer);
      else if (sectionName === "Word Library") performSearch(query, wordLibContainer);
      else if (sectionName === "Power Calc") performSearch(query, powerCalcContainer);
      else if (sectionName === "Documentation") performSearch(query, docContainer);
    });
  }

  /***************************************************************
   * buildTree(obj, container)
   *  Recursively creates the collapsible structure exactly like before
   ***************************************************************/
  function buildTree(obj, container) {
    if (typeof obj !== "object" || !obj) return; // safety

    Object.keys(obj).forEach((key) => {
      if (key === "Description") {
        // skip building a child for "Description" here
        return;
      }

      const val = obj[key];

      // If there's a Description, store it separately
      let childDesc = "";
      if (typeof val === "object" && val !== null && "Description" in val) {
        childDesc = val.Description;
        delete val.Description; // so we don't build another node for it
      }

      // Create the .section
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      // Create header row
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("section-header");
      sectionDiv.appendChild(headerDiv);

      // Checkbox
      const chk = document.createElement("input");
      chk.type = "checkbox";
      chk.classList.add("itemCheckbox");
      headerDiv.appendChild(chk);

      // Toggle (+/-)
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "+";
      headerDiv.appendChild(toggleBtn);

      // Label
      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      // (i) Info button
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Toggle description";
      headerDiv.appendChild(infoBtn);

      // Child container
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If there's a childDesc, create a descBox
      let descBox = null;
      if (childDesc) {
        descBox = document.createElement("div");
        descBox.classList.add("descBox");
        descBox.style.display = "none";
        descBox.textContent = childDesc;
        // Insert before contentDiv
        sectionDiv.insertBefore(descBox, contentDiv);
      }

      // If val is an object, build subnodes
      if (typeof val === "object" && val !== null) {
        buildTree(val, contentDiv);

        // Expand/collapse
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
        // Leaf
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }

      // Info button => toggle descBox
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
   *   - highlight / expand matches in container
   ***************************************************************/
  function performSearch(query, container) {
    const tokens = query.toLowerCase().split(/\s+/);
    const allHeaders = container.querySelectorAll(".section-header");

    allHeaders.forEach(headerDiv => {
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
    tokens.forEach(t => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, m => `<span class="highlight">${m}</span>`);
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
   ***************************************************************/
  function hideAllDescriptions() {
    const allDesc = document.querySelectorAll(".descBox");
    allDesc.forEach(d => d.style.display = "none");
  }

  /***************************************************************
   * uncheckAll()
   ***************************************************************/
  function uncheckAll() {
    const checkboxes = document.querySelectorAll(".itemCheckbox");
    checkboxes.forEach(chk => {
      chk.checked = false;
    });
  }

  /***************************************************************
   * checkParents(childCheckbox)
   ***************************************************************/
  function checkParents(childCheckbox) {
    let parent = childCheckbox.closest(".section").parentElement;
    while (parent && parent.classList.contains("section-content")) {
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
   ***************************************************************/
  function buildSelectedHierarchy(container, depth) {
    let result = "";
    const sections = container.querySelectorAll(":scope > .section");
    sections.forEach(section => {
      const header = section.querySelector(":scope > .section-header");
      const content = section.querySelector(":scope > .section-content");
      const checkbox = header.querySelector(".itemCheckbox");

      // Recurse
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
