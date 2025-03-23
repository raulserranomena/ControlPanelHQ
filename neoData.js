// neoData.js

// The "Programming" field is our large DSC PowerSeries NEO data from data.js
// The other fields are just placeholders for demonstration.

var neoData = {
  "Specifications": {
    "Description": "Below are the main specifications for the NEO panel.\n\n(Placeholder specs—add real data here.)",
    "Max Zones": {
      "Description": "Supports up to 128 zones."
    },
    "Partitions": {
      "Description": "Supports up to 8 partitions."
    },
    "Power Requirements": {
      "Description": "16.5VAC, 40VA transformer, backup battery."
    }
  },

  "Programming": {
  "[*][8] -- Installer Programming Options Dir (p: 56-122)": {
    "Description": "Main directory of Installer Programming options (pages 56–122). Used to configure the entire system.",
    "[000] Label Programming (p: 60)": {
      "Description": "Options for labeling zones, partitions, modules, and more.",
      "000 Label Programming (p: 60)": {
        "Description": "Customize system language, zone labels, partition labels, etc.",
        "000 -- Language Selection (01)": {
          "Description": "Choose the system display language on the keypads."
        },
        "001 -- Zone Labels": {
          "Description": "Label individual zones for easy identification.",
          "001-128 -- Zone Labels 1-128": {
            "Description": "Each index stores the label for zones 1 through 128."
          }
        },
        "051 -- Zone Tamper Label": {
          "Description": "Label shown if a zone tamper occurs."
        },
        "052 -- Zone Fault Label": {
          "Description": "Label shown if a zone fault is detected."
        },
        "064 -- CO Alarm Message": {
          "Description": "Label displayed if a carbon monoxide alarm occurs."
        },
        "065 -- Fire Alarm Message": {
          "Description": "Label displayed if a fire alarm is triggered."
        },
        "066 -- Fail to Arm Event Message": {
          "Description": "Message used if the system fails to arm."
        },
        "067 -- Alarm When Armed Event Message": {
          "Description": "Message shown if an alarm occurs while armed."
        },
        "100 -- System Label": {
          "Description": "Primary name for the entire security system."
        },
        "101-108 -- Partition 1-8 Labels": {
          "Description": "Labels for each of the up to 8 partitions."
        },
        "201-208 -- Partition 1-8 Command Output Labels": {
          "Description": "Labels for command outputs associated with each partition.",
          "001-004 -- Command output 1-4 Labels": {
            "Description": "Give each command output (1–4) a descriptive name."
          }
        },
        "601-604 -- Schedule 1-4 Labels": {
          "Description": "Labels for schedules (1–4) that can automate tasks."
        },
        "801 -- Keypad Labels": {
          "Description": "Label each physical keypad for identification.",
          "001-016 -- Keypad 1-16 Labels": {
            "Description": "Assign a unique name to each of up to 16 keypads."
          }
        },
        "802 -- HSM2108 Zone Expander Module Labels": {
          "Description": "Labels for HSM2108 zone expanders (1–15).",
          "001-015 -- Zone Expander 1-15 Labels": {
            "Description": "Unique name for each zone expander module."
          }
        },
        "803 -- HSM2208 Low Current Output Expander Module Labels": {
          "Description": "Labels for HSM2208 output expanders (1–16).",
          "001-016 -- Output Expander 1-16 Labels": {
            "Description": "Name each low-current output on the HSM2208."
          }
        },
        "806 -- HSM2HOST Module Label": {
          "Description": "Label for the wireless transceiver (HSM2HOST)."
        },
        "808 -- HSM2955 Two-Way Audio Module Label": {
          "Description": "Label for the HSM2955 two-way audio verification module."
        },
        "809 -- HS2300 Power Supply Module Label": {
          "Description": "Label for up to 4 HS2300 power supply modules.",
          "001-004 -- Power Supply 1-4 Label": {
            "Description": "Name each power supply module."
          }
        },
        "810 -- HSM2204 High Current Output Supply Module Label": {
          "Description": "Label for the HSM2204 high-current output module.",
          "001-004 -- O/P Expander 1-4 Label": {
            "Description": "Name each HSM2204 output expander."
          }
        },
        "815 -- Alternate Communicator Label": {
          "Description": "Assign a label for an alternate communicator module (e.g., TL280)."
        },
        "820 -- Siren Label": {
          "Description": "Names for up to 16 sirens (wired or wireless).",
          "001-016 -- Siren 1-16 Label": {
            "Description": "Give each siren a unique label."
          }
        },
        "821 -- Repeater Label (PG9920)": {
          "Description": "Labels for up to 8 wireless repeaters.",
          "001-008 -- Repeater 1-8 Label": {
            "Description": "Name each wireless repeater."
          }
        },
        "999 -- Default Labels": {
          "Description": "Restore default text labels to factory settings."
        }
      }
    },
    "[001] -- [002] Zone Type (p: 63)": {
      "Description": "Zone definitions and attributes configuration (delay, instant, 24-hour, etc.).",
      "001 -- Zone Definitions / Type (p: 63)": {
        "Description": "Assign each zone a type (delay, instant, fire, etc.).",
        "001-128 Zone Definitions / Types (000)": {
          "Description": "List of codes for zone behavior.",
          "000 -- Null Zone": {
            "Description": "DEFINITION – [000], NULL ZONE\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nWhen violated, a null zone will not be displayed on the keypad or generate an alarm\n\nAPPLICATION:\nCommonly used when required to disable a zone"
          },
          "001 -- Delay 1": {
            "Description": "DEFINITION – [001], DELAY 1\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nIf violated when the system is armed, entry delay will begin (Entry Delay 1). If a valid access code is entered before entry delay expires, no alarm is generated. If a valid access code is not entered before entry delay expires, an alarm is generated.\n\nAPPLICATION:\nUsed for zones that are used as an entrance point to a location when the system is armed. For example, a front door to a house."
          },
          "002 -- Delay 2": {
            "Description": "DEFINITION – [002], DELAY 2\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nIf violated when the system is armed, entry delay will begin (Entry Delay 2). If a valid access code is entered before entry delay expires, no alarm is generated. If a valid access code is not entered before entry delay expires, an alarm is generated.\n\nAPPLICATION:\nUsed for zones that are an entrance point to a location when the system is armed. For example, another door. The entry delay 2 timer can be programmed differently from entry delay 1."
          },
          "003 -- Instant": {
            "Description": "DEFINITION – [003], INSTANT\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nIf violated when the system is armed, an alarm is instantly generated.\n\nAPPLICATION:\nCommonly used for perimeter zones that require immediate alarm upon violation, such as windows or secondary doors not used for entry."
          },
          "004 -- Interior": {
            "Description": "DEFINITION – [004], INTERIOR\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nIf violated when the system is armed, operation varies depending on whether a delay type was violated first:\n  a) If a Delay type zone was violated first: entry delay begins, allowing user to disarm.\n  b) If no Delay zone was violated first: alarm is generated instantly.\n\nAPPLICATION:\nCommonly used for motion detectors inside the premises. It allows a valid entry path if coming in via a delay door, but triggers immediate alarm if someone enters improperly (e.g., through a window)."
          },
          "005 -- Interior Stay/Away": {
            "Description": "DEFINITION – [005], INTERIOR STAY/AWAY\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nWhen armed in Stay mode, this zone will be automatically bypassed; violations are ignored. When armed in Away mode, it operates as an Interior zone (same as [004]).\n\nAPPLICATION:\nUsed for motion detectors inside a home so that if the system is armed in Stay mode, these motion zones are bypassed, allowing occupants to move around indoors. In Away mode, they become active interior zones."
          },
          "006 -- Delay Stay/Away": {
            "Description": "DEFINITION – [006], DELAY STAY/AWAY\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nDiffers depending on Stay or Away mode:\n  a) Stay Mode: zone automatically bypassed; no alarms.\n  b) Away Mode: zone behaves like Delay 1.\n\nAPPLICATION:\nOften used for an interior motion that must be bypassed in Stay mode, but if armed Away, it has a delay entrance (like [001])"
          },
          "007 -- Delayed 24-Hour Fire": {
            "Description": "DEFINITION – [007], DELAYED 24-HR FIRE\n\nTYPE:\n24-HR\n\nOPERATION:\nWhen violated, siren output activates (pulsed), and a 30 second timer begins:\n  • If no button is pressed on the keypad in that 30 seconds and the zone remains in alarm at the end, the alarm is logged and transmitted.\n  • If the zone is restored before 30s expires, siren stops and alarm is not sent.\n  • If any keypad button is pressed within the 30s, a 90s timer starts and the siren stops, ignoring the zone. After 90s, if the zone is still violated, the 30s sequence restarts.\n\nAPPLICATION:\nUsed in areas like a kitchen where false smoke detections can occur. Hardwired zones for this type are forced to single EOL resistor wiring."
          },
          "008 -- Standard 24-Hour Fire": {
            "Description": "DEFINITION – [008], STANDARD 24-HR FIRE\n\nTYPE:\n24-HR\n\nOPERATION:\nWhen violated, siren output is pulsed. The alarm is instantly logged and transmitted.\n\nAPPLICATION:\nUsed where an immediate fire alarm is required. Hardwired zones for this type use single EOL resistor wiring by default."
          },
          "009 -- Instant Stay/Away": {
            "Description": "DEFINITION – [009], INSTANT STAY/AWAY\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nIf armed Stay, the zone is bypassed automatically. If armed Away, the zone operates as an Instant zone ([003]).\n\nAPPLICATION:\nCommonly used for motion detectors that remain bypassed in Stay but instantly alarm in Away mode."
          },
          "010 -- Interior Delay": {
            "Description": "DEFINITION – [010], INTERIOR DELAY\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nActs as an Interior zone if armed Away; acts as Delay 1 if armed Stay.\n\nAPPLICATION:\nA zone that remains active in both Stay and Away, but with different behaviors in each arming mode."
          },
          "011 -- Day Zone": {
            "Description": "DEFINITION – [011], DAY ZONE\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nBehavior differs based on armed or disarmed:\n  • Armed: Triggers instant alarm.\n  • Disarmed: Keypad sounds continuously for bell cutoff time if violated. No alarm is generated.\n\nAPPLICATION:\nUsed where a violation should generate a steady keypad alert if disarmed, but an immediate alarm if armed. For instance, a pool door or liquor cabinet door."
          },
          "012 -- Night Zone": {
            "Description": "DEFINITION – [012], NIGHT ZONE\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nAuto-bypassed if armed Stay. If [*][1] Reactivate Stay/Away is performed, Night zones do NOT become active. If system is armed Away from disarmed, these zones behave like Interior zones.\n\nAPPLICATION:\nOften used for motion detectors on a second floor. User arms Stay and reactivates certain Stay/Away zones for first-floor coverage, leaving Night zones bypassed upstairs so they can move around freely."
          },
          "016 -- Final Door Set": {
            "Description": "DEFINITION – [016], FINAL DOOR SET\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nInfinite exit delay begins upon arming in Away with keypad or keyfob. The system completes arming only after this zone is opened and closed (violated/restored). If violated when armed, it triggers entry delay.\n\nAPPLICATION:\nUsed as the main entry/exit door when a longer or indefinite exit time is required. Arming finalizes only after crossing this door."
          },
          "017 -- 24-Hour Burglary": {
            "Description": "DEFINITION – [017], 24-HR BURGLARY\n\nTYPE:\n24-HR\n\nOPERATION:\nIf violated, the zone triggers a burglary alarm (logged and transmitted) whether the system is armed or disarmed.\n\nAPPLICATION:\nUsed whenever a continuous burglary protection is needed, e.g., a valuables cage or emergency exit that must always report an alarm."
          },
          "018 -- 24-Hour Bell/Buzzer": {
            "Description": "DEFINITION – [018], 24-HR BELL/BUZZER\n\nTYPE:\n24-HR\n\nOPERATION:\nViolations trigger alarm, armed or disarmed. If disarmed, only keypad buzzer sounds; if armed, bell also activates.\n\nAPPLICATION:\nUsed for around-the-clock protection but with a buzzer when disarmed instead of a full siren."
          },
          "023 -- 24-Hour Supervisory": {
            "Description": "DEFINITION – [023], 24-HR SUPERVISORY\n\nTYPE:\n24-HR\n\nOPERATION:\nNormally open contacts, always single EOL. Triggering logs and transmits a silent alarm, no audible output.\n\nAPPLICATION:\nFor supervision of critical circuits or devices, generating a silent alarm at any time."
          },
          "024 -- 24-Hour Supervisory Buzzer": {
            "Description": "DEFINITION – [024], 24HR SUPERVISORY BUZZER\n\nTYPE:\n24-HR\n\nOPERATION:\nViolations log/transmit an alarm. Keypad buzzer continues until a valid code is entered.\n\nAPPLICATION:\nRequires local keypad alert for a supervisory condition, but no external siren."
          },
          "025 -- Auto Verify Fire": {
            "Description": "DEFINITION – [025], AUTO VERIFY FIRE\n\nTYPE:\n24-HR\n\nOPERATION:\nNo immediate bell output. After a 30s delay, if another fire trigger occurs within 60s, the alarm is instantly generated. (Wireless uses a slightly different 40s initial / 30s second trigger logic.)\n\nAPPLICATION:\nUsed where smoke detection is critical but false alarms (e.g. from cooking) are likely. Forces a short verification before full alarm. Hardwired zones forced to single EOL."
          },
          "027 -- Fire Supervisory": {
            "Description": "DEFINITION – [027], FIRE SUPERVISORY\n\nTYPE:\n24-HR\n\nOPERATION:\nKeypad buzzer until acknowledged. Logs, transmits if violated armed or disarmed. Hardwired zones forced single EOL.\n\nAPPLICATION:\nCommonly used to supervise a secondary fire panel or a sprinkler system tamper."
          },
          "040 -- 24-Hour Gas": {
            "Description": "DEFINITION – [040], 24-HR GAS\n\nTYPE:\n24-HR\n\nOPERATION:\nTripping the zone triggers an alarm 24/7, logs and transmits, plus siren if armed.\n\nAPPLICATION:\nGas detector input, can be NC or NO, always active."
          },
          "041 -- 24-Hour CO": {
            "Description": "DEFINITION – [041], 24-HR CO (CARBON MONOXIDE)\n\nTYPE:\n24-HR\n\nOPERATION:\nTriggers a CO-specific pulsed bell (5s pulses, extends to 60s pause after 4 minutes). Increase bell timeout to at least 5min. Logs and transmits.\n\nAPPLICATION:\nFor a CO detector that must always generate alarm. Hardwired forced single EOL resistor."
          },
          "042 -- 24-Hour Holdup": {
            "Description": "DEFINITION – [042], 24-HR HOLDUP\n\nTYPE:\n24-HR\n\nOPERATION:\nSilent alarm if violated. Always logs/transmits, no siren.\n\nAPPLICATION:\nFor hold-up or robbery panic buttons or zones, even if system is disarmed."
          },
          "043 -- 24-Hour Panic": {
            "Description": "DEFINITION – [043], 24-HR PANIC\n\nTYPE:\n24-HR\n\nOPERATION:\nViolations cause an audible alarm (bell/siren) armed or disarmed.\n\nAPPLICATION:\nFor audible panic or distress buttons."
          },
          "045 -- 24-Hour Heat": {
            "Description": "DEFINITION – [045], 24-HR HEAT\n\nTYPE:\n24-HR\n\nOPERATION:\nTriggers an audible alarm, logs, and transmits if violated at any time.\n\nAPPLICATION:\nFor heat detectors requiring immediate alarm."
          },
          "046 -- 24-HR Medical*": {
            "Description": "DEFINITION – [046], 24-HR MEDICAL\n\nTYPE:\n24-HR\n\nOPERATION:\nGenerates an audible alarm if violated, logs/transmits.\n\nAPPLICATION:\nFor medical or personal emergency pushbuttons, always active."
          },
          "047 -- 24-HR Emergency": {
            "Description": "DEFINITION – [047], 24-HR EMERGENCY\n\nTYPE:\n24-HR\n\nOPERATION:\nViolations cause an audible alarm, logs, transmits.\n\nAPPLICATION:\nGeneral emergency zone, always active. Monitoring station reaction can vary."
          },
          "048 -- 24-HR Sprinkler": {
            "Description": "DEFINITION – [048], 24-HR SPRINKLER\n\nTYPE:\n24-HR\n\nOPERATION:\nTriggers audible alarm if violated, logs and transmits.\n\nAPPLICATION:\nFor monitoring a sprinkler system flow or tamper, always active."
          },
          "049 -- 24-HR Flood": {
            "Description": "DEFINITION – [049], 24-HR FLOOD\n\nTYPE:\n24-HR\n\nOPERATION:\nTriggers audible alarm if violated, logs and transmits.\n\nAPPLICATION:\nFor normally closed flood sensors, always active."
          },
          "051 -- 24-Hour Latching Tamper": {
            "Description": "DEFINITION – [051], 24HR LATCHING TAMPER\n\nTYPE:\n24-HR\n\nOPERATION:\nTriggers audible alarm and reporting. System remains unready until the installer enters and exits programming.\n\nAPPLICATION:\nOften used to guard the control panel cabinet. Once violated, a reset is required to restore normal operation."
          },
          "052 -- 24-Hour Non-Alarm": {
            "Description": "DEFINITION – [052], 24HR NON-ALARM\n\nTYPE:\n24-HR\n\nOPERATION:\nNo siren or alarm is generated if violated. Can be used for door chime or temperature monitoring. Logs events.\n\nAPPLICATION:\nProvides annunciation without impacting system arming or causing alarms. Ideal for a zone that needs no security response."
          },
          "056 -- 24-Hour High Temperature": {
            "Description": "DEFINITION – [056], 24-HR HIGH TEMPERATURE\n\nTYPE:\n24-HR\n\nOPERATION:\nIf threshold is exceeded, triggers an audible alarm, logs, and transmits. Always active.\n\nAPPLICATION:\nUsed with high-temperature sensors. Wireless sensors can define the high threshold in their zone programming."
          },
          "057 -- 24 Hour Low Temperature": {
            "Description": "DEFINITION – [057], 24-HR LOW TEMPERATURE\n\nTYPE:\n24-HR\n\nOPERATION:\nTriggers an audible alarm, logs, and transmits if the temperature is below threshold.\n\nAPPLICATION:\nUsed with low-temp detectors to alert potential freeze conditions. Wireless thresholds set in zone programming."
          },
          "060 -- 24-Hour Non-Latching Tamper": {
            "Description": "DEFINITION – [060], 24HR NON-LATCHING TAMPER\n\nTYPE:\n24-HR\n\nOPERATION:\nLogs and transmits a tamper if violated. Once tamper is restored, system can arm.\n\nAPPLICATION:\nMonitors a tamper switch in the panel or device. Does not require installer reset like the latching type."
          },
          "066 -- Momentary Keyswitch Arm": {
            "Description": "DEFINITION – [066], MOMENTARY KEYSWITCH ARM\n\nTYPE:\nArm/Disarm Input\n\nOPERATION:\nA momentary violation toggles the system between armed and disarmed. Not used for intrusion detection.\n\nAPPLICATION:\nUsed for a keyswitch or external contact to arm/disarm with a short closure."
          },
          "067 -- Maintained Keyswitch Arm": {
            "Description": "DEFINITION – [067], MAINTAINED KEYSWITCH ARM\n\nTYPE:\nArm/Disarm Input\n\nOPERATION:\nZone is violated to arm the system, and restoring it disarms. Not used for detection.\n\nAPPLICATION:\nAlternate arming/disarming method using a maintained switch or contact."
          },
          "068 -- Momentary Keyswitch Disarm": {
            "Description": "DEFINITION – [068], MOMENTARY KEYSWITCH DISARM\n\nTYPE:\nArm/Disarm Input\n\nOPERATION:\nEach brief violation in an armed state disarms that partition.\n\nAPPLICATION:\nUsed when only a disarm function is required via an external switch."
          },
          "069 -- Maintained Keyswitch Disarm": {
            "Description": "DEFINITION – [069], MAINTAINED KEYSWITCH DISARM\n\nTYPE:\nArm/Disarm Input\n\nOPERATION:\nWhen zone is held violated in an armed system, it disarms. Restoring it arms again if configured.\n\nAPPLICATION:\nAnother alternate method to disarm using a maintained contact."
          },
          "071 -- Doorbell Zone": {
            "Description": "DEFINITION – [071], DOORBELL ZONE\n\nTYPE:\nNon-alarm\n\nOPERATION:\nActivates only the door chime, never an alarm.\n\nAPPLICATION:\nUse for a doorbell or similar device that triggers a chime but no security response."
          },
          "072 -- Push to Set (Non CP-01 panels only)": {
            "Description": "DEFINITION – [072], PUSH TO SET\n\nTYPE:\nNon 24-HR\n\nOPERATION:\nSimilar to [016] Final Door Set except no alarm occurs. Infinite exit delay until this zone is violated and restored, completing arming. No alarm if triggered while armed.\n\nAPPLICATION:\nOften used in regions requiring push-to-set. Extends exit delay indefinitely until user confirms arming by operating this zone."
          }
        }
      },
      "002 -- Zone Attributes (p: 67)": {
        "Description": "Zone attributes are toggle options that refine each zone’s behavior: bell output, EOL style, force-arm, etc.",
        "001-0128 (see PowerSeries Neo reference manual for defaults)": {
          "Description": "Toggle each attribute for zones 1–128.",
          "1 -- Bell Audible": {
            "Description": "TOGGLE OPTION #1\n\nON – BELL AUDIBLE:\nIf this toggle is ON, the bell output provides a steady output when an alarm is generated.\n\nOFF – BELL SILENT:\nIf OFF, an alarm on this zone will not activate the bell."
          },
          "2 -- Bell Steady": {
            "Description": "TOGGLE OPTION #2\n\nON – BELL STEADY:\nIf ON, an alarm on this zone will activate a steady bell output.\n\nOFF – BELL PULSED:\nIf OFF (and attribute #1 is ON), the bell is pulsed at 1 second ON / 1 second OFF, typically indicating fire alarms."
          },
          "3 -- Door Chime": {
            "Description": "TOGGLE OPTION #3\n\nON – DOOR CHIME ON:\nIf ON, when chime is enabled ([*][4]) this zone chimes if violated/secured.\n\nOFF – DOOR CHIME OFF:\nZone will not chime when violated if toggle is OFF."
          },
          "4 -- Bypass Enabled": {
            "Description": "TOGGLE OPTION #4\n\nON – BYPASS ENABLED:\nZone can be bypassed if selected in [*][1].\n\nOFF – BYPASS DISABLED:\nUser cannot bypass this zone; keypad beeps error if attempted."
          },
          "5 -- Force Arm": {
            "Description": "TOGGLE OPTION #5\n\nON – FORCE ARM ENABLED:\nZone can be open while arming; it auto-bypasses if violated.\n\nOFF – FORCE ARM DISABLED:\nZone must be secured before arming."
          },
          "6 -- Swinger Shutdown": {
            "Description": "TOGGLE OPTION #6\n\nON – SWINGER SHUTDOWN ENABLED:\nAfter a set number of alarms, zone stops reporting more alarms for that arming period or until midnight.\n\nOFF – SWINGER SHUTDOWN DISABLED:\nAll alarms from this zone are always reported."
          },
          "7 -- Transmission Delay": {
            "Description": "TOGGLE OPTION #7\n\nON – TRANSMISSION DELAY ENABLED:\nZone alarm is held until the panel’s transmission delay expires. If user disarms in that window, no report is sent.\n\nOFF – TRANSMISSION DELAY DISABLED:\nAlarm is transmitted instantly."
          },
          "8 -- Burglary Verification": {
            "Description": "TOGGLE OPTION #8\n\nON – BURGLARY VERIFICATION ENABLED:\nRequires another zone with cross zone enabled or additional triggers to confirm an alarm before reporting.\n\nOFF – BURGLARY VERIFICATION DISABLED:\nZone alarms are immediate."
          },
          "9 -- Normally Closed EOL": {
            "Description": "TOGGLE OPTION #9\n\nON – N/C LOOP:\nHardwired zone does not require EOL resistor.\n\nOFF – N/C LOOP DISABLED:\nFollows global zone wiring settings in [013]."
          },
          "10 -- Single EOL": {
            "Description": "TOGGLE OPTION #10\n\nON – SINGLE EOL:\nForces single EOL resistor wiring on this zone.\n\nOFF – SINGLE EOL DISABLED:\nFollows [013] zone wiring supervision settings."
          },
          "11 -- Double EOL": {
            "Description": "TOGGLE OPTION #11\n\nON – DOUBLE EOL:\nForces double EOL resistor wiring for this zone.\n\nOFF – DOUBLE EOL DISABLED:\nFollows [013] for zone wiring supervision."
          },
          "12 -- Fast Loop/Normal Loop Response": {
            "Description": "TOGGLE OPTION #12\n\nON – FAST LOOP RESPONSE:\nZone loop is ~50 ms.\n\nOFF – NORMAL LOOP RESPONSE:\nUses the panel’s loop response timer in [005]."
          },
          "13 -- Zone 2-way Audio Activation": {
            "Description": "TOGGLE OPTION #13\n\nON – 2-WAY AUDIO ENABLED:\nTriggers a 2-way audio session (requires HSM2955) upon alarm.\n\nOFF – 2-WAY AUDIO DISABLED:\nNo 2-way audio triggered by this zone."
          },
          "14 -- Holdup Verification": {
            "Description": "TOGGLE OPTION #14\n\nON – HOLD UP VERIFICATION ENABLED:\nAlarm from this zone contributes to a verified holdup if multiple triggers occur within the set time.\n\nOFF – HOLD UP VERIFICATION DISABLED:\nAlarm does not count toward verified holdup logic."
          }
        }
      }
    },
    "[005] System Times (p: 68)": {
      "Description": "Configurable times for entry/exit, bell cutoff, and daylight savings.",
      "005 -- System Times (p: 68)": {
        "Description": "System area (global) times and per-partition times.",
        "000 -- System Area": {
          "Description": "Global timers (bell cutoff, loop response, etc.).",
          "Bell Cutoff (004 min.)": {
            "Description": "How long the siren sounds before stopping automatically."
          },
          "Bell Delay Time (000 min.)": {
            "Description": "Delay before siren activates after alarm (commonly 0)."
          },
          "Burglary Verification Timer (060 sec.)": {
            "Description": "Seconds to verify burglary events before final alarm."
          },
          "Holdup Verification Timer (008 sec.)": {
            "Description": "Seconds to verify a holdup/panic event."
          },
          "Zone Loop Response (250 ms)": {
            "Description": "Default zone response speed in milliseconds."
          },
          "Automatic Clock Adjust (060 sec.)": {
            "Description": "Time window for auto clock updates."
          }
        },
        "001 -- 008 System Times -- Partition 1-8": {
          "Description": "Entry/exit delays for each partition.",
          "Entry Delay 1 (030 sec.)": {
            "Description": "Time to disarm after opening the designated entry door."
          },
          "Entry Delay 2 (045 sec.) (CP-01 030 sec.)": {
            "Description": "Secondary entry delay for an alternate door."
          },
          "Exit Delay (120 sec.) (CP-01 060 sec.)": {
            "Description": "Time to leave before system fully arms."
          },
          "Settle Delay (010 sec.) (CP-01 000 sec.)": {
            "Description": "Delay for motion sensors to stabilize after arming."
          }
        },
        "900 -- Bell Delay Partition Mask 1-8 (Y,Y,Y,Y,Y,Y,Y,Y)": {
          "Description": "Select partitions that use delayed bell activation."
        },
        "901 -- Daylight Savings Begin": {
          "Description": "Month/week/day/hour/increment for DST start.",
          "Month (003)": {
            "Description": "Month for starting DST (often March)."
          },
          "Week (002)": {
            "Description": "Which week of the month triggers DST."
          },
          "Day (000)": {
            "Description": "Day offset or day-of-week code for DST."
          },
          "Hour (002)": {"Description": "Time of day DST shift occurs."},
          "Increment (001)": {
            "Description": "Amount of time advanced (e.g., 1 hour)."
          }
        },
        "902 -- Daylight Savings End": {
          "Description": "Month/week/day/hour/decrement for DST end.",
          "Month (011)": {
            "Description": "Month for ending DST (often November)."
          },
          "Week (001)": {"Description": "Which week triggers DST end."},
          "Day (000)": {
            "Description": "Day offset or day-of-week code for ending DST."
          },
          "Hour (002)": {
            "Description": "Time of day to revert to standard time."
          },
          "Decrement (001)": {
            "Description": "Amount of time turned back (usually 1 hour)."
          }
        }
      }
    },
    "[006] Access Codes (p: 70)": {
      "Description": "Installer code, master code, maintenance code, etc.",
      "006 Installer Defined Access Codes (p: 70)": {
        "Description": "Where main codes are stored (installer, master, guard, etc.).",
        "(4-digit decimal)": {
          "Description": "Specifies code length or format (4- or 8-digit)."
        },
        "001 -- Installer Code (55555555)": {
          "Description": "Primary code for installer programming (change it!)."
        },
        "002 -- Master Code (12345678)": {
          "Description": "Main user code with highest privileges (change it!)."
        },
        "003 -- Maintenance Code (AAAAAAAA)": {
          "Description": "For maintenance personnel, limited access."
        },
        "004 -- Guard Code (AAAAAAAA)": {
          "Description": "Optional code for guard or security staff."
        },
        "005 - Code Version (000)": {
          "Description": "Defines code length or version for the above codes."
        }
      }
    },
    "[007] -- [012] PGM Programming (p: 70)": {
      "Description": "Configure PGMs (partition assignment, timers, definitions, attributes).",
      "007 -- PGM Partition Assignment (p: 71)": {
        "Description": "Which partitions each PGM and main bell belong to.",
        "000 -- Main Bell Partition Assignment": {
          "Description": "Enable the main bell output per partition.",
          "1 -- Partition 1": {"Description": "Bell used by partition 1."},
          "2 -- Partition 2": {"Description": "Bell used by partition 2."},
          "3 -- Partition 3": {"Description": "Bell used by partition 3."},
          "4 -- Partition 4": {"Description": "Bell used by partition 4."},
          "5 -- Partition 5": {"Description": "Bell used by partition 5."},
          "6 -- Partition 6": {"Description": "Bell used by partition 6."},
          "7 -- Partition 7": {"Description": "Bell used by partition 7."},
          "8 -- Partition 8": {"Description": "Bell used by partition 8."}
        },
        "001-164 -- PGM 1-164 Partition Assignment (default: partition 1)": {
          "Description": "Assign each PGM output to a specific partition or multiple."
        }
      },
      "008 -- PGM Timer Programming (p: 71)": {
        "Description": "Set each PGM’s active time (seconds or minutes).",
        "000 -- PGM Timer-Minutes or Seconds (seconds)": {
          "Description": "Choose how PGM timer durations are measured."
        },
        "001-164 -- PGM 1-164 Timer (005)": {
          "Description": "How long (in sec/min) each PGM remains active."
        }
      },
      "009 -- PGM Definitions / Types (p: 71)": {
        "Description": "Assign each PGM (1–164) a function (sensor reset, armed status, latched, etc.).",
        "001-164 -- PGM 1-164 Definitions / Type Assignment (default: PGM1=121, PGM2=156, PGM 3-164 =101)": {
          "Description": "Full list of PGM types controlling how the output behaves.",
          "100 -- Null PGM": {
            "Description": "PGM OPTION – [100], NULL PGM\n\nOVERVIEW:\nNo function. Output remains inactive."
          },
          "101 -- Burg and Fire Bell Follower": {
            "Description": "PGM OPTION – [101], BURGLARY AND FIRE BELL FOLLOWER\n\nOVERVIEW:\nActivates PGM whenever an audible burglary or fire alarm is active.\nOPERATION:\n• Activation: When any audible alarm is sounding.\n• Deactivation: When the alarm is silenced or bell cutoff occurs."
          },
          "102 -- Delayed Fire and Burg": {
            "Description": "PGM OPTION – [102], DELAYED FIRE AND BURGLARY\n\nOVERVIEW:\nSame as [101], but PGM activation may wait for zone transmission delay if applicable.\nOPERATION:\n• Activation: Follows audible alarms, delayed if zone uses TX delay.\n• Deactivation: Alarm acknowledgment or bell cutoff."
          },
          "103 -- Sensor Reset [*][7][2]": {
            "Description": "PGM OPTION – [103], SENSOR RESET\n\nOVERVIEW:\nUsed to power latching detectors (like 4-wire smokes). PGM is normally active.\nOPERATION:\n• Deactivates for ~5 seconds when [*][7][2] or sensor reset is triggered, removing power to reset the detector.\n• Then reactivates automatically."
          },
          "104 -- 2-Wire Smoke": {
            "Description": "PGM OPTION – [104], 2-WIRE SMOKE\n\nOVERVIEW:\nOnly valid on PGM2. Powers 2-wire smokes and monitors them for alarm. Hardwired EOL (2.2k).\nOPERATION:\n• Latching smoke detectors can be reset via [*][7][2].\n• Alarm is sensed on PGM2 line if smokes trip."
          },
          "109 -- Courtesy Pulse": {
            "Description": "PGM OPTION – [109], COURTESY PULSE\n\nOVERVIEW:\nActivates output during entry delay and exit delay + an additional 2 minutes.\nOPERATION:\n• Useful for turning on lights when entering or exiting."
          },
          "111 -- Keypad Buzzer Follow": {
            "Description": "PGM OPTION – [111], KEYPAD BUZZER FOLLOW\n\nOVERVIEW:\nActivates PGM whenever the keypad buzzer is active (entry delay, door chime, exit delay, audible exit fault, etc.).\nOPERATION:\n• Deactivation occurs when buzzer stops."
          },
          "114 -- Ready To Arm": {
            "Description": "PGM OPTION – [114], READY TO ARM\n\nOVERVIEW:\nOutput goes active if all zones are closed.\nOPERATION:\n• Active when system is ready.\n• Turns off if any zone is violated, removing ready status."
          },
          "115 -- System Armed Status": {
            "Description": "PGM OPTION – [115], SYSTEM ARMED STATUS\n\nOVERVIEW:\nActivates when the system is armed (all selected partitions).\nOPERATION:\n• Deactivates when disarmed.\n• The exit delay can also be included or excluded depending on programming ([018], option 3)."
          },
          "116 -- Away Armed Status": {
            "Description": "PGM OPTION – [116], AWAY ARMED STATUS\n\nOPERATION:\n• Active if system is armed Away.\n• Turns off if disarmed or armed Stay.\n\nAPPLICATION:\nUsed to indicate specifically that the system is in Away mode."
          },
          "117 -- Stay Armed Status": {
            "Description": "PGM OPTION – [117], STAY ARMED STATUS\n\nOPERATION:\n• Activates if system is armed in Stay.\n• Deactivates if disarmed or if system is armed Away.\n\nAPPLICATION:\nUsed to show specifically that the panel is in Stay mode."
          },
          "120 -- Away Armed with no Zone Bypass Status": {
            "Description": "PGM OPTION – [120], AWAY ARMED WITH NO ZONE BYPASS STATUS\n\nOPERATION:\n• Activates if the system is armed Away without any manual bypassed zones. Turns off if a bypass is added or if system changes mode."
          },
          "121 -- Command Output 1": {
            "Description": "PGM OPTION – [121], COMMAND OUTPUT #1\n\nOPERATION:\n• Triggered by [*][7][1]. Typically requires a code by default.\n• Default 5s activation.\n• May be scheduled or have attributes set for latching/timing."
          },
          "122 -- Command Output 2": {
            "Description": "PGM OPTION – [122], COMMAND OUTPUT #2\n\nOPERATION:\n• Triggered by [*][7][2]. Default 5s timer.\n• Code required unless changed.\n• May be linked to schedules or attributes in [010][011]."
          },
          "123 -- Command Output 3": {
            "Description": "PGM OPTION – [123], COMMAND OUTPUT #3\n\nOPERATION:\n• Triggered by [*][7][3].\n• Default 5s or latched per attributes.\n• Commonly used for gates, lighting, or other user-initiated outputs."
          },
          "124 -- Command Output 4": {
            "Description": "PGM OPTION – [124], COMMAND OUTPUT #4\n\nOPERATION:\n• Triggered by [*][7][4].\n• Similar logic to 121–123, separate channel.\n• Time and code requirements in attributes."
          },
          "129 -- Partition Status Alarm Memory": {
            "Description": "PGM OPTION – [129], PARTITION STATUS ALARM MEMORY\n\nOPERATION:\n• Steady output if partition(s) are armed. Pulses if an alarm has occurred (latched) until disarmed or memory is cleared.\n• Commonly used for an external LED or plate indicating arm/alarm state."
          },
          "132 -- Holdup Output": {
            "Description": "PGM OPTION – [132], HOLDUP OUTPUT\n\nOPERATION:\n• Latches on alarm if a 24Hr Holdup zone ([042]) goes into alarm.\n• Reset by disarming or code entry.\n\nAPPLICATION:\nUsed to drive an indicator or external system for hold-up triggers."
          },
          "134 -- 24Hr Silent Input (PGM2)": {
            "Description": "PGM OPTION – [134], 24 HOUR SILENT INPUT (PGM 2)\n\nOPERATION:\n• PGM2 is wired with a 2.2k resistor to AUX(+) and a normally open device.\n• If triggered, logs/transmits a silent alarm.\n\nAPPLICATION:\nUsed as a separate 24Hr zone on PGM2."
          },
          "135 -- 24Hr Audible Input (PGM2)": {
            "Description": "PGM OPTION – [135], 24 HOUR AUDIBLE INPUT (PGM 2)\n\nOPERATION:\n• PGM2 used as an audible 24Hr zone input with a 2.2k resistor.\n• If triggered, an audible alarm is generated.\n\nAPPLICATION:\nAnother zone on PGM2, but with a siren output."
          },
          "146 -- TLM and Alarm": {
            "Description": "PGM OPTION – [146], TLM AND ALARM\n\nOPERATION:\n• Activates if an alarm occurs while phone line is in trouble.\n• Deactivates when alarm is acknowledged or bell cutoff.\n\nAPPLICATION:\nUsed to indicate an alarm couldn’t dial out over PSTN (TLM trouble)."
          },
          "147 -- Kissoff": {
            "Description": "PGM OPTION – [147], KISSOFF OUTPUT\n\nOPERATION:\n• Activates for 2 seconds after a successful communication kiss-off.\n\nAPPLICATION:\nCan be used to blink an LED or beep a device upon successful central station communication."
          },
          "148 -- Ground Start": {
            "Description": "PGM OPTION – [148], GROUND START\n\nOPERATION:\n• Activates 2s before dialing to accommodate certain phone line setups requiring ground start.\n\nAPPLICATION:\nUsed in regions/areas with ground start telephone lines."
          },
          "149 -- Alternate Communicator": {
            "Description": "PGM OPTION – [149], ALTERNATE COMMUNICATOR\n\nOPERATION:\n• Activates for selected system events (fire, panic, burglary, etc.) if those bits are toggled in PGM attributes.\n• Latches until disarm if triggered armed.\n\nAPPLICATION:\nUsed with IP or GSM modules, or for specialized control upon certain alarm events."
          },
          "155 -- System Trouble": {
            "Description": "PGM OPTION – [155], SYSTEM TROUBLE\n\nOVERVIEW:\nActivates if any selected system trouble condition is present. Deactivates when all are cleared.\n\nAPPLICATION:\nDrive an external trouble LED or buzzer for service required, AC fail, battery low, etc."
          },
          "156 -- Latched System Event": {
            "Description": "PGM OPTION – [156], LATCHED SYSTEM EVENT (STROBE)\n\nOVERVIEW:\nActivates on any chosen alarm type (burglary, fire, panic, medical, supervisory, etc.) and stays on until code entry.\n\nAPPLICATION:\nOften used for a strobe or other device that must remain active until user resets the alarm."
          },
          "157 -- System Tamper": {
            "Description": "PGM OPTION – [157], SYSTEM TAMPER\n\nOVERVIEW:\nActivates if any zone or module tamper occurs.\n\nOPERATION:\n• Stays active until tamper(s) are cleared.\n• Commonly used to drive an external tamper indicator or relay."
          },
          "161 -- DC Trouble": {
            "Description": "PGM OPTION – [161], DC TROUBLE\n\nOPERATION:\n• Activates on low/absent panel battery, module battery trouble, or wireless device low battery.\n• Deactivates once conditions clear or after code reset.\n\nAPPLICATION:\nIndicates battery or DC power issues for entire system."
          },
          "165 -- Prox Used": {
            "Description": "PGM OPTION – [165], PROXIMITY TAG USED\n\nOPERATION:\n• Activates whenever the assigned user’s prox tag is presented.\n• Timer or latched output depends on attributes.\n\nAPPLICATION:\nFor lights or doors triggered by a specific user tag."
          },
          "166 -- Partition Prox Used": {
            "Description": "PGM OPTION – [166], PARTITION PROX USED\n\nOPERATION:\n• Activates when any user’s prox tag is used on that partition.\n• Timer or latch per attributes.\n\nAPPLICATION:\nGeneral partition-level prox detection (any user)."
          },
          "175 -- Bell Status and Programming Access Output": {
            "Description": "PGM OPTION – [175], BELL STATUS AND PROGRAMMING ACCESS OUTPUT\n\nOPERATION:\n• Activates if bell is active or the panel is in Installer/DLS session.\n• Deactivates after bell times out or programming ends.\n\nAPPLICATION:\nGives external indication of alarm bell or panel in program mode."
          },
          "176 -- Remote Operation": {
            "Description": "PGM OPTION – [176], REMOTE OPERATION\n\nOPERATION:\n• Toggled by DLS software for remote on/off control.\n\nAPPLICATION:\nAllows a service provider to turn a PGM on or off remotely, ignoring local triggers."
          },
          "184 -- Open After Alarm": {
            "Description": "PGM OPTION – [184], OPEN AFTER ALARM\n\nOPERATION:\n• Activates if the panel is disarmed after an alarm event.\n• Remains until a timer ends or the system is re-armed, depending on attributes.\n\nAPPLICATION:\nUsed to signal an “alarm occurred, then disarmed” condition for external logging or strobe."
          },
          "200 -- Zone Follower": {
            "Description": "PGM OPTION – [200], ZONE FOLLOWER – SINGLE ZONE\n\nOPERATION:\n• Follows a single zone’s state selected in [011].\n• Active if that zone is open or in alarm, off if zone secures.\n\nAPPLICATION:\nTie a specific device action to exactly one zone’s open/close."
          },
          "201 -- Follower-Zones 1-8": {
            "Description": "PGM OPTION – [201] – Follows zones 1–8\n\nOPERATION:\n• Activates if any zone in 1–8 is violated.\n• Deactivates when all are secure."
          },
          "202 -- Follower-Zones 9-16": {
            "Description": "PGM OPTION – [202] – Follows zones 9–16\n\nOPERATION:\n• Activates if any zone in 9–16 is violated.\n• Deactivates when all are secure."
          },
          "203 -- Follower-Zones 17-24": {
            "Description": "PGM OPTION – [203] – Follows zones 17–24\n\nOPERATION:\n• Activates if any zone in 17–24 is violated.\n• Deactivates when all are secure."
          },
          "204 -- Follower-Zones 25-32": {
            "Description": "PGM OPTION – [204] – Follows zones 25–32\n\nOPERATION:\n• Activates if any zone in 25–32 is violated.\n• Deactivates when all are secure."
          },
          "205 -- Follower-Zones 33-40": {
            "Description": "PGM OPTION – [205] – Follows zones 33–40\n\nOPERATION:\n• Activates if any zone in 33–40 is violated.\n• Deactivates when all are secure."
          },
          "206 -- Follower-Zones 41-48": {
            "Description": "PGM OPTION – [206] – Follows zones 41–48\n\nOPERATION:\n• Activates if any zone in 41–48 is violated.\n• Deactivates when all are secure."
          },
          "207 -- Follower-Zones 49-56": {
            "Description": "PGM OPTION – [207] – Follows zones 49–56\n\nOPERATION:\n• Activates if any zone in 49–56 is violated.\n• Deactivates when all are secure."
          },
          "208 -- Follower-Zones 57-64": {
            "Description": "PGM OPTION – [208] – Follows zones 57–64\n\nOPERATION:\n• Activates if any zone in 57–64 is violated.\n• Deactivates when all are secure."
          },
          "209 -- Follower-Zones 65-72": {
            "Description": "PGM OPTION – [209] – Follows zones 65–72\n\nOPERATION:\n• Activates if any zone in 65–72 is violated.\n• Deactivates when all are secure."
          },
          "210 -- Follower-Zones 73-80": {
            "Description": "PGM OPTION – [210] – Follows zones 73–80\n\nOPERATION:\n• Activates if any zone in 73–80 is violated.\n• Deactivates when all are secure."
          },
          "211 -- Follower-Zones 81-88": {
            "Description": "PGM OPTION – [211] – Follows zones 81–88\n\nOPERATION:\n• Activates if any zone in 81–88 is violated.\n• Deactivates when all are secure."
          },
          "212 -- Follower-Zones 89-96": {
            "Description": "PGM OPTION – [212] – Follows zones 89–96\n\nOPERATION:\n• Activates if any zone in 89–96 is violated.\n• Deactivates when all are secure."
          },
          "213 -- Follower-Zones 97-104": {
            "Description": "PGM OPTION – [213] – Follows zones 97–104\n\nOPERATION:\n• Activates if any zone in 97–104 is violated.\n• Deactivates when all are secure."
          },
          "214 -- Follower-Zones 105-112": {
            "Description": "PGM OPTION – [214] – Follows zones 105–112\n\nOPERATION:\n• Activates if any zone in 105–112 is violated.\n• Deactivates when all are secure."
          },
          "215 -- Follower-Zones 113-120": {
            "Description": "PGM OPTION – [215] – Follows zones 113–120\n\nOPERATION:\n• Activates if any zone in 113–120 is violated.\n• Deactivates when all are secure."
          },
          "216 -- Follower-Zones 120-128": {
            "Description": "PGM OPTION – [216] – Follows zones 120–128\n\nOPERATION:\n• Activates if any zone in 120–128 is violated.\n• Deactivates when all are secure."
          }
        }
      },
      "010 -- PGM Attributes (p: 76)": {
        "Description": "Extra attributes for each PGM (timed, latched, code-required, etc.).",
        "000 -- Main Bell Mask": {
          "Description": "Which alarm types (fire, CO, burglary, flood) activate the main bell.",
          "1 - Fire Alarm ✔": {"Description": "Bell rings on fire alarms."},
          "2 - CO Alarm ✔": {"Description": "Bell rings on CO alarms."},
          "3 - Burglary Alarm ✔": {
            "Description": "Bell rings on burglary alarms."
          },
          "4 - 24-Hour Flood Alarm ✔": {
            "Description": "Bell rings on flood sensor alarms."
          },
          "5 - Bell Squawks ✔": {
            "Description": "Enables chirps for arm/disarm or other signals."
          }
        },
        "001-164 PGM 1-164 Attributes": {
          "Description": "Attributes bitmask for each PGM (true output, code required, etc.).",
          "1 -- True Output ✔": {
            "Description": "PGM goes active as soon as condition is met."
          },
          "2 -- 8 Attributes depends on the PGM type assigned in [009]": {
            "Description": "These bits vary based on the PGM type."
          },
          "9 -- show more options": {
            "Description": "Extended bits for specialized uses.",
            "1 -- 8 = 9 to 16 Attributes depends on the PGM type assigned [009]": {
              "Description": "Advanced attribute bits depending on PGM type."
            }
          }
        },
        "Attributes List per PGM type assigned [009]": {
          "Description": "Table showing each PGM type’s supported attribute bits.",
          "100 -- Null PGM": {"Description": "No function, no attributes."},
          "101 -- Fire and Burglary": {
            "Description": "Attributes controlling fire and burglary bell follower."
          },
          "102 -- Delay Fire and Burglary": {
            "Description": "Attributes for delayed activation on fire/burg events."
          },
          "103 -- Sensor Reset [*][7][2]": {
            "Description": "Attributes for resetting smoke or glass-break detectors."
          },
          "109 -- Courtesy Pulse": {
            "Description": "Attributes for courtesy lighting or short pulse outputs."
          },
          "111 -- Keypad Buzzer Follow": {
            "Description": "PGM follows keypad buzzer with optional timing."
          },
          "114 -- Ready To Arm": {
            "Description": "Attributes controlling how PGM behaves when system is ready."
          },
          "115 -- Armed Status": {
            "Description": "Attributes for panel-armed indication."
          },
          "116 -- Armed Away Mode": {
            "Description": "Attributes for away-armed indication only."
          },
          "117 -- Armed Stay Mode": {
            "Description": "Attributes for stay-armed indication only."
          },
          "121 - 124 -- Command Output 1-4": {
            "Description": "Attributes controlling how command outputs behave.",
            "01 -- True Output ✔": {
              "Description": "Activates as soon as command is initiated."
            },
            "02 -- Timed Output ✔": {
              "Description": "Turns off after the PGM timer expires."
            },
            "03 -- Code Required ✔": {
              "Description": "Requires a valid code before the command output triggers."
            },
            "(NZ off)": {
              "Description": "Placeholder for region differences (unused if zero)."
            }
          },
          "129 -- Partition Status Alarm Memory": {
            "Description": "Attributes for latched alarm memory output."
          },
          "132 -- Holdup Output": {
            "Description": "Attributes for panic/holdup triggers."
          },
          "146 -- TLM and Alarm": {
            "Description": "Attributes controlling output for phone line trouble + alarm."
          },
          "147 -- Kissoff Output": {
            "Description": "Attributes for activation after central station acknowledgment."
          },
          "148 -- Ground Start": {
            "Description": "Attributes if a ground-start line is required."
          },
          "149 -- Alternate Communicator": {
            "Description": "Attributes controlling output on events from IP/GSM modules."
          },
          "155 -- System Trouble": {
            "Description": "Attributes controlling how to handle system trouble signals."
          },
          "156 -- Latched System Event": {
            "Description": "Remains active after system event until reset."
          },
          "157 -- System Tamper": {
            "Description": "Activates on tamper condition in modules or keypads."
          },
          "161 -- DC Trouble": {
            "Description": "Attributes for battery or DC power trouble."
          },
          "165 -- Prox Used": {
            "Description": "Attributes controlling output if a prox tag is used system-wide."
          },
          "166 -- Partition Prox Used": {
            "Description": "Similar, but partition-based prox usage."
          },
          "175 -- Bell Prog Access": {
            "Description": "Attributes for bell indication or programming access."
          },
          "176 -- Remote Operation": {
            "Description": "Attributes for remote (DLS) operation triggers."
          },
          "184 -- Open After Alarm": {
            "Description": "PGM triggers if system is disarmed following an alarm.",
            "01 -- True Output ✔": {
              "Description": "Output is on once alarm is cleared by disarm."
            },
            "02 -- PGM Timer ✔": {
              "Description": "PGM active for a set time after disarm post-alarm."
            }
          },
          "200 Zone Follower -- Single Zone": {
            "Description": "Attributes for a single-zone follower PGM.",
            "01 -- True Output ✔": {
              "Description": "Active while zone is open or in alarm."
            },
            "02 -- Timed Output": {
              "Description": "Stays active for a set time after zone closes."
            },
            "03 -- Code Required": {
              "Description": "Needs a code to reset the latched output."
            },
            "04 -- Latching": {
              "Description": "Remains on until system reset or disarmed."
            },
            "05 -- Follow Alarm": {
              "Description": "Only activates if the zone actually goes into alarm."
            }
          },
          "201- 216 Zone Follow Zones 1-128": {
            "Description": "Follows blocks of zones (8-zone groups).",
            "01 -- True Output ✔": {
              "Description": "Active if any zone in that block is open/alarm."
            },
            "02 -- Timed Output": {
              "Description": "Remains on for a set time after triggered."
            },
            "04 -- Latching": {
              "Description": "PGM stays on until reset once triggered."
            },
            "05 -- Follow Alarm": {
              "Description": "Activates only if any zone in the block alarms."
            },
            "09-016 -- Zone Terminal 1-16": {
              "Description": "Assign which specific zone terminals in the block are followed."
            }
          }
        }
      },
      "011 -- PGM Configuration Options (p: 84)": {
        "Description": "Additional PGM config (zone linking, schedules, prox usage).",
        "001-164 -- PGM 1-164 Configuration": {
          "Description": "Fine-tune each PGM's advanced references or triggers.",
          "Zone Follower by Zone": {
            "Description": "Explicitly set which zone(s) each PGM follows."
          },
          "Proximity Tag Used": {
            "Description": "Trigger PGM if a prox tag is used on that partition."
          },
          "Command Output Schedules": {
            "Description": "Link a PGM to time-based schedules."
          }
        }
      },
      "012 -- System Lockout (attempts/min.) (P: 84)": {
        "Description": "How many invalid code attempts are allowed before lockout and for how long.",
        "Keypad Lockout Attempts (000)": {
          "Description": "Number of tries at the keypad before lockout (0 disables lockout)."
        },
        "Keypad Lockout Duration (000)": {
          "Description": "How many minutes the keypad remains locked."
        },
        "Remote Lockout Attempts (006)": {
          "Description": "Invalid remote access tries before blocking."
        },
        "Remote Lockout Duration (060)": {
          "Description": "Minutes that remote access is blocked after too many tries."
        }
      }
    },
    "[013] -- [304] System Options (p: 85)": {
      "Description": "System-wide options and advanced features (keypads, trouble displays, etc.).",
      "013 -- System Options 1 (p: 85)": {
        "Description": "Configure zone wiring style, trouble display, auto-arm schedule, etc.",
        "1 -- NC Loop/EOL": {
          "Description": "Toggle between normally closed loop or end-of-line supervision."
        },
        "2 -- DEOL/SEOL": {
          "Description": "Enable double or single end-of-line resistor supervision."
        },
        "3 -- Show All Troubles when Armed ✔": {
          "Description": "Even if the system is armed, active troubles are displayed on the keypad."
        },
        "4 -- Tamper/Faults Do Not Show As Open": {
          "Description": "Display tamper/fault separately, rather than as an open zone."
        },
        "5 -- Auto-Arm Schedule in [*][6] ✔": {
          "Description": "Allows scheduled auto-arming set under user function [*][6]."
        },
        "6 -- Audible Exit Fault ✔": {
          "Description": "Keypad beeps rapidly if an exit door remains open at the end of exit delay."
        },
        "7 -- Event Buffer Follows Swinger ✔": {
          "Description": "Prevents repeated alarms from the same zone from filling the event buffer if swinger shutdown occurs."
        },
        "8 -- Temporal Three Fire Signaling": {
          "Description": "Enables NFPA72 triple-beep pattern for fire alarm annunciation."
        }
      },
      "014 -- System Options 2 (p: 86)": {
        "Description": "Toggles for bell squawks, exit-delay termination, continuous fire bell, etc.",
        "1 -- Bell Squawk": {
          "Description": "Bell or siren chirps on arm/disarm if enabled."
        },
        "2 -- Bell Squawk Auto-Arm": {
          "Description": "Bell chirps to warn of an impending auto-arm event."
        },
        "3 -- Bell Squawk on Exit": {
          "Description": "Bell chirps once exit delay finishes, confirming arming."
        },
        "4 -- Bell Squawk on Entry": {
          "Description": "Bell chirps at the start of entry delay."
        },
        "5 -- Bell Squawk on Trouble": {
          "Description": "Bell briefly chirps on certain trouble conditions."
        },
        "6 -- Not Used": {
          "Description": "Reserved for future use; no effect in current firmware."
        },
        "7 -- Exit Delay Termination": {
          "Description": "Ends the exit delay immediately if the final door is closed."
        },
        "8 -- Fire Bell Continues": {
          "Description": "Fire bell does not time out automatically; requires manual silence."
        }
      },
      "015 -- System Options 3 (p: 86)": {
        "Description": "Options for [F]/[P] keys, quick exit, quick arming, TLM, and code-change restrictions.",
        "1 -- [F] (Fire) Key Enabled ✔": {
          "Description": "If enabled, pressing [F] triggers a fire alarm."
        },
        "2 -- [P] (Panic) Key Audible": {
          "Description": "If enabled, panic key triggers an audible alarm instead of silent."
        },
        "3 -- Quick Exit": {
          "Description": "Allows a brief exit in Stay mode without having to disarm fully."
        },
        "4 -- Quick Arming/Function Key ✔ (if disable system is going to ask for code to disarm)": {
          "Description": "Permits arming without code via a function key; disabling requires code entry."
        },
        "5 -- Not Used": {"Description": "Reserved for future use."},
        "6 -- Master Code Not User Changeable": {
          "Description": "Prevents regular users from altering the master code."
        },
        "7 -- TLM (Telephone Line Monitor) Enable ✔": {
          "Description": "Activates telephone line monitoring to detect line cuts or faults."
        },
        "8 -- TLM (Telephone Line Monitor) Audible When Armed": {
          "Description": "If phone line fails while armed, trouble beeps or alarm is triggered."
        }
      },
      "016 -- System Options 4 (p: 87)": {
        "Description": "Configure AC trouble display, keypad blanking, backlighting, power save, and keypad tamper.",
        "1 -- AC Trouble Display ✔": {
          "Description": "Keypads show trouble if AC power is lost."
        },
        "2 -- AC Trouble Light Flashes": {
          "Description": "Trouble light flashes instead of steady when AC fails."
        },
        "3 -- Keypad Blanking": {
          "Description": "Turns off keypad display after inactivity to reduce power usage."
        },
        "4 -- Keypad Blanking Requires Code": {
          "Description": "Requires code entry to restore display from blanking."
        },
        "5 -- Keypad Backlighting ✔": {
          "Description": "Keeps keypad backlight on, unless power-saving mode is active."
        },
        "6 -- Power Save Mode": {
          "Description": "Reduces keypad lighting when the system runs on battery only."
        },
        "7 -- Bypass Display When Armed": {
          "Description": "Displays bypassed zones even if system is armed."
        },
        "8 -- Keypad Tampers Enabled": {
          "Description": "Triggers a tamper condition if keypad housing is opened."
        }
      },
      "017 -- System Options 5 (p: 88)": {
        "Description": "Chime on opening, cross zoning, remote reinstatement, daylight saving, etc.",
        "1 -- Chime On Opening": {
          "Description": "Keypad chimes when system is opened/disarmed if enabled."
        },
        "2 -- Chime On Closing": {
          "Description": "Keypad chimes when arming if enabled (some regions only)."
        },
        "3 -- RF Jam Audible (Trouble Beeps)": {
          "Description": "Triggers audible beeps for RF jam trouble conditions if enabled."
        },
        "4 -- Multi-Hit": {
          "Description": "Requires multiple activations from a device to trigger an alarm (false alarm reduction)."
        },
        "5 -- Late to Close": {
          "Description": "Generates a Late-to-Close event if the system isn’t armed by a scheduled time."
        },
        "6 -- Daylight Savings Time": {
          "Description": "Enables or disables automatic daylight savings time adjustments."
        },
        "7 -- Silence Chime During Quick Exit Delay": {
          "Description": "Disables normal chime beeps while Quick Exit is active."
        },
        "8 -- Bell Squawk on Away Arm/Disarm Only": {
          "Description": "Squawks only when arming/disarming in Away mode, not in Stay."
        }
      },
      "018 -- System Options 6 (p: 89)": {
        "Description": "Additional system toggles (test transmission, real-time bypass reporting, exit delay restart, etc.).",
        "1 -- Test Transmission Exception": {
          "Description": "Defines how test transmissions are handled or if they’re skipped under certain conditions."
        },
        "2 -- Real-Time Bypass Reporting": {
          "Description": "Immediately sends bypass events to the monitoring station if enabled."
        },
        "3 -- Armed State PGM ON at End of Exit Delay": {
          "Description": "A designated PGM can turn on once the system is fully armed (exit delay finished)."
        },
        "4 -- Not Used": {"Description": "Reserved for future use."},
        "5 -- Keypad Buzzer Alarm": {
          "Description": "Keypad buzzer sounds during an alarm if enabled."
        },
        "6 -- Not Used": {"Description": "Reserved for future use."},
        "7 -- Exit Delay Restart (CP-01 ✔)": {
          "Description": "Automatically restarts the exit delay if you open/close the door again (CP-01 setting)."
        },
        "8 -- AC Fail Trouble Beeps": {
          "Description": "Keypad emits trouble beeps on AC failure if enabled."
        }
      },
      "019 -- System Options 7 (p: 90)": {
        "Description": "Controls audible wireless zone faults, tamper settings, temperature units, etc.",
        "1 -- Audible Wireless Zone Fault": {
          "Description": "Enables beeps if a wireless zone fault occurs."
        },
        "2 -- Latching Troubles (UK ✔)": {
          "Description": "Troubles require a manual reset rather than clearing automatically."
        },
        "3 -- Not Used": {"Description": "Reserved for future use."},
        "4 -- R-Button": {
          "Description": "Region-specific function for an [R] button on certain keypads."
        },
        "5 -- Audible Bus Fault (UK ✔)": {
          "Description": "Generates audible trouble if a bus module fault occurs."
        },
        "6 -- Duress Codes": {
          "Description": "Enables or disables duress code functionality."
        },
        "7 -- Temperature in Celsius ✔": {
          "Description": "Displays temperature (if used) in Celsius instead of Fahrenheit."
        },
        "8 -- Reset After Zone Activation": {
          "Description": "Requires a manual reset after certain zone activations (varies by region)."
        }
      },
      "020 -- System Options 8 (p: 91)": {
        "Description": "Access code entry during entry delay, remote reset, engineer’s reset, etc.",
        "1 -- Access Code Entry During Entry Delay": {
          "Description": "Allow code entry in the entry delay period to disarm."
        },
        "2 -- EU Entry Procedure (UK ✔)": {
          "Description": "Enables the European/UK-specific entry procedure logic if required."
        },
        "3 -- [*][8] Access While Armed": {
          "Description": "If enabled, programming can be accessed while system is armed (for service)."
        },
        "4 -- Remote Reset": {
          "Description": "Allows remote reset of certain alarms or trouble conditions."
        },
        "5 -- Engineer's Reset": {
          "Description": "For UK/EU compliance, an installer (engineer) must reset certain conditions."
        },
        "6 -- Keyswitch Disarming During Entry Delay": {
          "Description": "Permits a keyswitch to disarm if triggered within entry delay."
        },
        "7 -- Installer Access and DLS": {
          "Description": "Controls if installer or DLS can access the panel while armed."
        },
        "8 -- Troubles Inhibits Arming": {
          "Description": "If enabled, system cannot arm if there are active troubles."
        }
      },
      "021 -- System Options 9 (p: 92)": {
        "Description": "Extra toggles for trouble display, keypad blanking, open/close logic, etc.",
        "1 -- Trbl Display": {
          "Description": "Determines how troubles are shown on the keypad."
        },
        "2 -- Keypad Blanking while armed (UK ✔)": {
          "Description": "Keypad blanking may be forced when the system is armed, region-specific."
        },
        "3 -- Auto-Arming Bypass": {
          "Description": "Automatically bypass any open zones at auto-arm time."
        },
        "4 -- Ready Display": {
          "Description": "Choose how the keypad displays readiness to arm."
        },
        "5 -- PGM Keypad Blanking": {
          "Description": "Ties keypad blanking state to a specific PGM if needed."
        },
        "6 -- Armed Display": {
          "Description": "Select how the keypad indicates armed status."
        },
        "7 -- Open Cancels Arming (UK ✔)": {
          "Description": "If an entry/exit door is reopened during exit time, it cancels the arming."
        },
        "8 -- Audible Exit Delay for Stay Arming": {
          "Description": "If set, exit delay beeps are heard even when stay-arming."
        }
      },
      "022 -- System Options 10 (p: 93)": {
        "Description": "Options for F-key, test transmission intervals, away/stay toggles, trouble beeps, etc.",
        "1 -- [F] (Fire) Key Option": {
          "Description": "Region-specific modification for the [F] key operation."
        },
        "2 -- Not Used": {"Description": "Reserved for future use."},
        "3 -- Not Used": {"Description": "Reserved for future use."},
        "4 -- Test Transmission Counter in Hours (timer test in hours)": {
          "Description": "Sets the test transmission cycle in hours rather than days."
        },
        "5 -- Away to Stay Toggle": {
          "Description": "Allows the system to revert from Away to Stay mode if no exit is detected."
        },
        "6 -- 2-Way Full Duration ✔": {
          "Description": "If enabled, 2-way audio remains open for full duration rather than timed intervals."
        },
        "7 -- Trouble Beeps Are Silent": {
          "Description": "Prevents keypad from beeping on trouble; trouble still displayed."
        },
        "8 -- Keyswitch Arms in Away Mode (UK ✔)": {
          "Description": "Keyswitch input forces Away arming if required for UK compliance."
        }
      },
      "023 -- System Options 11 (p: 94)": {
        "Description": "Ready LED flash, tamper/fault detection, code required for [*] commands, etc.",
        "1 -- Ready LED Flash for Force Arm": {
          "Description": "Ready LED flashes if a zone is force-armed."
        },
        "2 -- Not Used": {"Description": "Reserved for future use."},
        "3 -- Tamper/Fault Detection": {
          "Description": "Enables or disables tamper/fault detection system-wide."
        },
        "4 -- Access Code Required for [*][1]": {
          "Description": "Entering [*][1] demands a valid code if enabled."
        },
        "5 -- Access Code Required for [*][2]": {
          "Description": "Requires a valid code for the [*][2] trouble menu."
        },
        "6 -- Access Code Required for [*][3]": {
          "Description": "Code required for [*][3] alarm memory if enabled."
        },
        "7 -- Access Code Required for [*][4]": {
          "Description": "Code required for [*][4] door chime or toggling outputs."
        },
        "8 -- [*][6] Accessibility": {
          "Description": "Requires a code to access [*][6] user functions if enabled."
        }
      },
      "024 -- System Options 12 (p: 94)": {
        "Description": "AC frequency detection, tamper inhibit, real-time clock, etc.",
        "1-- 50Hz AC / 60 Hz AC (ARG ✔)(EN ✔)(AUS ✔)(NZ ✔)(CHN ✔)(SA ✔)(CE ✔)(FRA ✔)(UK ✔)": {
          "Description": "Set panel for 50Hz or 60Hz AC line frequency (region-specific)."
        },
        "2 -- Crystal Timebase": {
          "Description": "Option to enable crystal-based timing for higher accuracy."
        },
        "3 -- AC/DC Inhibits Arming (UK ✔)": {
          "Description": "Prevents arming if AC/DC power is not stable (UK standard)."
        },
        "4 -- Tamper Inhibit Arm": {
          "Description": "Stops arming if tamper conditions exist."
        },
        "5 -- Real Time Clock Option": {
          "Description": "Allows real-time clock features to be displayed/used."
        },
        "6 -- Not Used": {"Description": "Reserved for future expansion."},
        "7 -- AC Brownout Detection (This option must be enabled for UL/ULC Commercial Fire Installations.)": {
          "Description": "Enables panel detection of AC brownout conditions for UL/ULC fire."
        },
        "8 -- DLS Disconnect": {
          "Description": "Forces a disconnect of any active DLS session if needed."
        }
      },
      "025 -- System Options 13 (p: 95)": {
        "Description": "Dialing rules, test in minutes, ID tones, DLS window, and more.",
        "1 -- European Dial (ARG ✔)(EN ✔)(AUS ✔)(BRAZIL ✔)(SA ✔)(CE ✔)2 -- Force Dial ✔": {
          "Description": "Region-specific dial settings, possibly forcing dial attempts even if line not detected."
        },
        "3 -- Test Transmission Counter in Minutes (timer test in minutes)": {
          "Description": "Configures the periodic test interval in minutes instead of hours/days."
        },
        "4 -- Not Used": {"Description": "Reserved for future expansion."},
        "5 -- ID Tone": {
          "Description": "Panel ID tone for handshake with older receivers or modems."
        },
        "6 -- (ID Tone) Tone Generated-2100Hz": {
          "Description": "Generates a 2100 Hz tone for specific legacy receiver handshake."
        },
        "7 -- 1 Hour DLS Window": {
          "Description": "Restricts DLS calls/communication to a 1-hour window."
        },
        "8 -- FTC (Failure to Communicate) Audible Bell": {
          "Description": "Activates the bell on a failure-to-communicate trouble if enabled."
        }
      },
      "040 -- User Authentication (p: 96)": {
        "Description": "Requires code or prox tag for user authentication settings.",
        "01 -- User Code or Proximity Tag ✔": {
          "Description": "System can be disarmed using either code or prox tag."
        },
        "02 -- User Code and Proximity Tag": {
          "Description": "Requires both code entry and prox tag for higher security."
        }
      },
      "041 -- Access Code Digits (p: 96)": {
        "Description": "Choose 4-, 6-, or 8-digit code lengths for user/installer codes.",
        "00 -- 4-Digit Access Codes ✔": {
          "Description": "Codes are 4 digits by default (CP-01 or standard)."
        },
        "01 -- 6-Digit Access Codes": {
          "Description": "Require 6-digit codes for higher security."
        },
        "02 -- 8-Digit Access Codes": {
          "Description": "Require 8-digit codes for maximum security."
        }
      },
      "042 -- Event Verification (Verified Events) (p: 96)": {
        "Description": "Options to reduce false alarms by requiring multiple triggers (burglary or holdup).",
        "01 -- Burglary Verified Counter (002) (UK 003)": {
          "Description": "Number of zone activations required to confirm a burglary alarm."
        },
        "02 -- Holdup Verification Counter (002)": {
          "Description": "Number of triggers to confirm a holdup alarm condition."
        },
        "03 -- Burglary Verification Selection": {
          "Description": "Select how burglary verification is implemented.",
          "001 -- Police Code ✔": {
            "Description": "Generates a second alarm event if the same zone re-trips quickly (police code)."
          },
          "002 -- Cross Zoning": {
            "Description": "Two distinct zones must trip within a time window to confirm alarm."
          },
          "003 -- EU Sequential Detection (UK ✔)": {
            "Description": "Sequential detection logic required for EU/UK false alarm reduction."
          }
        }
      },
      "151-158 Partition 1-8 Auto-Arm/Disarm (p: 98)": {
        "Description": "Configure each partition’s auto-arm/disarm times, holiday schedules, pre-alerts, etc.",
        "001 -- Auto-Arming Times (9999)": {
          "Description": "Times (HHMM) for auto-arm each day or 24-hour setting.",
          "24-Hour": {
            "Description": "Auto-arm time for the 24-hour interval if used."
          },
          "Sunday": {"Description": "Auto-arm time for Sundays."},
          "Monday": {"Description": "Auto-arm time for Mondays."},
          "Tuesday": {"Description": "Auto-arm time for Tuesdays."},
          "Wednesday": {"Description": "Auto-arm time for Wednesdays."},
          "Thursday": {"Description": "Auto-arm time for Thursdays."},
          "Friday": {"Description": "Auto-arm time for Fridays."},
          "Saturday": {"Description": "Auto-arm time for Saturdays."}
        },
        "002 -- Auto-Disarm Times (9999)": {
          "Description": "Times (HHMM) for auto-disarm each day or 24-hour setting.",
          "24-Hour": {
            "Description": "Auto-disarm time for a 24-hour operation if used."
          },
          "Sunday": {"Description": "Auto-disarm time for Sundays."},
          "Monday": {"Description": "Auto-disarm time for Mondays."},
          "Tuesday": {"Description": "Auto-disarm time for Tuesdays."},
          "Wednesday": {"Description": "Auto-disarm time for Wednesdays."},
          "Thursday": {"Description": "Auto-disarm time for Thursdays."},
          "Friday": {"Description": "Auto-disarm time for Fridays."},
          "Saturday": {"Description": "Auto-disarm time for Saturdays."}
        },
        "003 -- Auto-Disarming Holiday Schedule": {
          "Description": "Holiday-based disarm scheduling if needed.",
          "Holiday 1": {"Description": "Auto-disarm times for Holiday 1."},
          "Holiday 2": {"Description": "Auto-disarm times for Holiday 2."},
          "Holiday 3": {"Description": "Auto-disarm times for Holiday 3."},
          "Holiday 4": {"Description": "Auto-disarm times for Holiday 4."}
        },
        "004 -- Auto-Arming Pre-Alert (004)": {
          "Description": "Number of minutes/seconds for audible warning before auto-arm."
        },
        "005 -- Auto-Arming Postpone Timer (000)": {
          "Description": "Time user can postpone auto-arm."
        },
        "006 -- No Activity Arming Timer (000)": {
          "Description": "Automatically arm if no zone activity for this long."
        },
        "007 -- No Activity Arming Pre-Alert Timer (001)": {
          "Description": "Warning period before no-activity arming occurs."
        }
      },
      "200 Partition Mask (Enable Partition) (p: 99)": {
        "Description": "Enable or disable partitions 1-8.",
        "001 -- Partition 1 to 8 Enable Mask": {
          "Description": "Select which partitions are active.",
          "1 -- Partition 1 ✔": {
            "Description": "Partition 1 is enabled by default."
          },
          "2 -- Partition 2": {"Description": "Enable partition 2 if needed."},
          "3 -- Partition 3": {"Description": "Enable partition 3 if needed."},
          "4 -- Partition 4": {"Description": "Enable partition 4 if needed."},
          "5 -- Partition 5": {"Description": "Enable partition 5 if needed."},
          "6 -- Partition 6": {"Description": "Enable partition 6 if needed."},
          "7 -- Partition 7": {"Description": "Enable partition 7 if needed."},
          "8 -- Partition 8": {"Description": "Enable partition 8 if needed."}
        }
      },
      "201-208 Partition 1-8 Zone Assignment (Mask) (Enable Zones) (p: 99)": {
        "Description": "Assign each block of zones (1-8, 9-16, etc.) to a partition.",
        "001 -- Zone 1-8 ✔": {
          "Description": "Partition includes zones 1–8 if checked."
        },
        "002 -- Zn 9-16 ✔": {
          "Description": "Partition includes zones 9–16 if checked."
        },
        "003 -- Zn 17-24": {
          "Description": "Partition includes zones 17–24 if checked."
        },
        "004 -- Zn 25-32": {
          "Description": "Partition includes zones 25–32 if checked."
        },
        "005 -- Zn 33-40": {
          "Description": "Partition includes zones 33–40 if checked."
        },
        "006 -- Zn 41-48": {
          "Description": "Partition includes zones 41–48 if checked."
        },
        "007 -- Zn 49-56": {
          "Description": "Partition includes zones 49–56 if checked."
        },
        "008 -- Zn 57-64": {
          "Description": "Partition includes zones 57–64 if checked."
        },
        "009 -- Zn 65-72": {
          "Description": "Partition includes zones 65–72 if checked."
        },
        "010 -- Zn 73-80": {
          "Description": "Partition includes zones 73–80 if checked."
        },
        "011 -- Zn 81-88": {
          "Description": "Partition includes zones 81–88 if checked."
        },
        "012 -- Zn 89-96": {
          "Description": "Partition includes zones 89–96 if checked."
        },
        "013 -- Zn 97-104": {
          "Description": "Partition includes zones 97–104 if checked."
        },
        "014 -- Zn 105-112": {
          "Description": "Partition includes zones 105–112 if checked."
        },
        "015 -- Zn 113-120": {
          "Description": "Partition includes zones 113–120 if checked."
        },
        "016 -- Zn 121-128": {
          "Description": "Partition includes zones 121–128 if checked."
        }
      },
      "300 Panel/Receiver Communications Path (p: 99)": {
        "Description": "Choose how signals are sent to the receiver(s): phone line, Ethernet, cellular, etc.",
        "001 -- 004 Receiver 1-4": {
          "Description": "For each receiver, select PSTN or alternate communicator.",
          "01 -- Phone Line ✔": {
            "Description": "Use standard PSTN phone line for this receiver."
          },
          "02 -- Alt Comm Auto Routing": {
            "Description": "Automatically route to alternate communicator if phone line fails."
          },
          "03 -- Alt Comm Rec 1 - Ethernet": {
            "Description": "Use Ethernet communicator for receiver 1 if available."
          },
          "04 -- Alt Comm Rec 2 - Ethernet": {
            "Description": "Use Ethernet communicator for receiver 2 if available."
          },
          "05 -- Alt Comm Rec 3 - Cellular": {
            "Description": "Use cellular communicator for receiver 3 if available."
          },
          "06 -- Alt Comm Rec 4 - Cellular": {
            "Description": "Use cellular communicator for receiver 4 if available."
          }
        }
      },
      "301 Phone Number Programming (p: 100)": {
        "Description": "Set up to four phone numbers for central station reporting.",
        "001 -- 004 Phone Number 1 -4 Programming (DFFF...32-digit)": {
          "Description": "Enter each phone number (up to 32 digits) for the corresponding receiver."
        }
      },
      "304 Call Waiting Cancel String (p: 100)": {
        "Description": "Defines the sequence used to cancel call waiting when dialing out.",
        "6-digit (DB70EF)": {
          "Description": "Enter up to 6 digits or special codes for call waiting cancel."
        }
      }
    },
    "[307] -- [308] Event Reporting (p: 100)": {
      "Description": "Sets how zone and miscellaneous events (alarm, trouble, restore) are reported.",
      "307 Zone Reporting (p: 100)": {
        "Description": "Configure which zone events (alarm, restore, tamper) get reported for zones 1–128.",
        "001-128 Zone Reporting for Zones 1-128": {
          "Description": "Assign reporting options for each zone individually (1–128).",
          "01 -- Alarm ✔": {
            "Description": "Report alarm events generated by this zone."
          },
          "02 -- Alarm Restore ✔": {
            "Description": "Report when the zone alarm condition is restored."
          },
          "03 -- Tamper ✔": {
            "Description": "Report tamper condition for this zone."
          },
          "04 -- Tamper Restore ✔": {
            "Description": "Report when the tamper condition is cleared."
          },
          "05 -- Fault ✔": {
            "Description": "Report fault condition (e.g., wiring fault) for this zone."
          },
          "06 -- Fault Restore ✔": {
            "Description": "Report when the zone fault is corrected."
          }
        }
      },
      "308 Event Reporting (p: 101)": {
        "Description": "Setup event codes for various alarm types (duress, holdup verified, etc.), restorals, and system states.",
        "001 -- Miscellaneous Alarm 1": {
          "Description": "Includes duress alarm, open-after-alarm, verified burglary, etc.",
          "01 -- Duress Alarm ✔": {
            "Description": "Report duress code usage if triggered by user under coercion."
          },
          "02 -- Opening After Alarm ✔": {
            "Description": "Report if the system is disarmed after an alarm event."
          },
          "03 -- Recent Closing Alarm ✔": {
            "Description": "Report alarm triggered soon after arming (recent closing)."
          },
          "04 -- Zone Expander Supervisory Alarm ✔": {
            "Description": "Report zone expander supervisory alarm conditions."
          },
          "05 -- Zone Expander Supervisory Alarm Restore ✔": {
            "Description": "Report the restore of zone expander supervisory alarm."
          },
          "06 -- Burglary Verified ✔": {
            "Description": "Report a burglary alarm that meets verification criteria."
          },
          "07 -- Burg Not Verified Alarm ✔": {
            "Description": "Report an unverified burglary alarm event."
          },
          "08 -- Alarm Cancel ✔": {
            "Description": "Report if an alarm was canceled before final transmission."
          }
        },
        "002 -- Miscellaneous Alarm 2": {
          "Description": "Holds additional alarm signals, e.g., holdup verified.",
          "01 -- Holdup Verified Alarm ✔": {
            "Description": "Report a verified holdup/panic alarm event."
          }
        },
        "011 -- Priority Alarms": {
          "Description": "Fire, medical, panic alarm transmissions and their restores.",
          "01 -- Keypad Fire Alarm - F Key ✔": {
            "Description": "Report fire alarm triggered by pressing keypad [F]."
          },
          "02 -- Keypad Fire Alarm Restore ✔": {
            "Description": "Report the restore of a [F]-key fire alarm."
          },
          "03 -- Keypad Medical Alarm - M Key ✔": {
            "Description": "Report medical alarm triggered by [M] key if available."
          },
          "04 -- Keypad Medical Alarm Restore ✔": {
            "Description": "Report restore of the medical alarm condition."
          },
          "05 -- Keypad Panic Alarm (P) ✔": {
            "Description": "Report panic alarm triggered by [P] key."
          },
          "06 -- Keypad Panic Alarm Restore ✔": {
            "Description": "Report restore of the keypad panic alarm condition."
          },
          "07 -- Auxiliary Input Alarm ✔": {
            "Description": "Report an alarm triggered by an auxiliary input zone."
          },
          "08 -- Aux Input Alarm Restore ✔": {
            "Description": "Report the restore of an auxiliary input alarm condition."
          }
        },
        "021 -- Fire Alarms 1": {
          "Description": "Relates to fire alarms, including 2-wire smoke via PGM2.",
          "03 -- PGM 2 2-Wire Alarm ✔": {
            "Description": "Report alarm from a 2-wire smoke loop on PGM2."
          },
          "04 -- PGM 2 2-Wire Restore ✔": {
            "Description": "Report restore of the 2-wire smoke loop alarm condition."
          }
        },
        "101 -- Tamper Events": {
          "Description": "Configuration for reporting tamper events and lockouts.",
          "03 -- Module Tamper ✔": {
            "Description": "Report a tamper on an enrolled module."
          },
          "04 -- Module Tamper Restore ✔": {
            "Description": "Report restore of the module tamper condition."
          },
          "05 -- Keypad Lockout ✔": {
            "Description": "Report if the keypad is locked out after repeated invalid codes."
          },
          "07 -- Remote Lockout ✔": {
            "Description": "Report if remote access (DLS/SA) is locked out after too many attempts."
          }
        },
        "201 -- Open/Close Events 1": {
          "Description": "Opening/closing (arm/disarm) reporting settings.",
          "01 -- User Closing ✔": {
            "Description": "Report when a user arms (closes) the partition."
          },
          "02 -- User Opening ✔": {
            "Description": "Report when a user disarms (opens) the partition."
          },
          "03 -- Future Use": {
            "Description": "Reserved for potential future open/close reporting expansions."
          },
          "04 -- Future Use": {"Description": "Reserved."},
          "05 -- Special Closing ✔": {
            "Description": "Report a special arming type (no entry, stay, etc.)."
          },
          "06 -- Special Opening ✔": {
            "Description": "Report disarm by special code or method."
          },
          "07 -- Keyswitch Opening ✔": {
            "Description": "Report disarm done via a keyswitch zone."
          },
          "08 -- Keyswitch Closing ✔": {
            "Description": "Report arming done via a keyswitch zone."
          }
        },
        "202 -- Open/Close Events 2": {
          "Description": "Additional open/close reporting items (auto arm, etc.).",
          "01 -- Automatic Closing ✔02 -- Automatic Disarm ✔": {
            "Description": "Combined code for automatic arming/disarming events if used."
          },
          "03 -- Auto Arm Cancellation/Postpone ✔": {
            "Description": "Report if auto-arm was canceled or postponed by the user."
          }
        },
        "211 -- Miscellaneous Open/Close Events": {
          "Description": "Late to close/open and exit fault events reporting.",
          "01 -- Late to Close ✔": {
            "Description": "Report if the system armed later than the scheduled time."
          },
          "02 -- Late to Open ✔": {
            "Description": "Report if the system was disarmed later than usual/scheduled."
          },
          "05 -- Exit Fault ✔": {
            "Description": "Report if an exit door was violated after the system armed (exit fault)."
          }
        },
        "221 -- Bypass Events": {
          "Description": "Reports auto bypass, partial closing, or other bypass conditions.",
          "01 -- Auto Zone Bypass": {
            "Description": "Report if the panel automatically bypassed a zone."
          },
          "02 -- Auto Zone Unbypass": {
            "Description": "Report restoring a bypassed zone to normal."
          },
          "03 -- Partial Closing ✔": {
            "Description": "Report if the system was armed while certain zones remain bypassed."
          }
        },
        "301 -- Panel Events 1": {
          "Description": "Panel-level troubles like AC fail, battery low, etc.",
          "01 -- Panel AC Fail Trouble ✔": {
            "Description": "Report AC loss trouble condition on the main board."
          },
          "02 -- Panel AC Fail Restore ✔": {
            "Description": "Report when AC power is restored."
          },
          "03 -- Panel Low Battery ✔": {
            "Description": "Report a low battery trouble condition on the panel."
          },
          "04 -- Panel Low Battery Restore ✔": {
            "Description": "Report battery restored to normal voltage."
          },
          "05 -- Panel Battery Absent ✔": {
            "Description": "Report if panel battery is missing or not connected."
          },
          "06 -- Panel Battery Absent Trouble Restore ✔": {
            "Description": "Report if the battery is reconnected/resolved after absent trouble."
          }
        },
        "302 -- Panel Events 2": {
          "Description": "Further panel troubles (bell, phone line, AUX, etc.) and restorals.",
          "01 -- Bell Circuit Trouble ✔": {
            "Description": "Report trouble in bell/siren circuit (open/short)."
          },
          "02 -- Bell Circuit Restore ✔": {
            "Description": "Report clearing of the bell circuit trouble."
          },
          "03 -- Telephone Line Trouble ✔": {
            "Description": "Report telephone line fault or cut condition."
          },
          "04 -- Telephone Line Trouble Restore ✔": {
            "Description": "Report line trouble is fixed or line is restored."
          },
          "05 -- Auxiliary Trouble ✔": {
            "Description": "Report trouble on the AUX power output or similar circuit."
          },
          "06 -- Auxiliary Trouble Restore ✔": {
            "Description": "Report AUX trouble is restored."
          }
        },
        "305 -- Panel Events 5": {
          "Description": "Extra panel events (like 2-wire smoke trouble on PGM2).",
          "03 -- PGM 2 2-Wire Trouble ✔": {
            "Description": "Report if 2-wire smoke on PGM2 is in trouble state."
          },
          "04 -- PGM 2 2-Wire Restore ✔": {
            "Description": "Report restore of the 2-wire smoke trouble."
          }
        },
        "311 -- Maintenance Events 1": {
          "Description": "Covers RF jam trouble, fire trouble, cold start, delinquency, self-test trouble, etc.",
          "01 -- RF Jam Trouble ✔": {
            "Description": "Report a detected RF jamming signal interfering with wireless."
          },
          "02 -- RF Jam Trouble Restore ✔": {
            "Description": "Report when RF jam condition is resolved."
          },
          "03 -- Fire Trouble ✔": {
            "Description": "Report if panel or module detects a fire zone trouble state."
          },
          "04 -- Fire Trouble Restore ✔": {
            "Description": "Report clearing of fire trouble."
          },
          "05 -- Cold Start ✔": {
            "Description": "Report a panel cold start (power-up from reset)."
          },
          "06 -- Delinquency ✔": {
            "Description": "Report if system was not armed for extended period (delinquency)."
          },
          "07 -- Self Test Trouble ✔": {
            "Description": "Report if system fails an internal self-test."
          },
          "08 -- Self Test Trouble Restore ✔": {
            "Description": "Report clearing of the self-test trouble condition."
          }
        },
        "312 -- Maintenance Events 2": {
          "Description": "Tracks installer lead in/out, DLS lead in/out, SA (stand-alone) lead in/out, event buffer usage, etc.",
          "01 -- Installer Lead IN ✔": {
            "Description": "Report when the installer enters programming (lead in)."
          },
          "02 -- Installer Lead OUT ✔": {
            "Description": "Report when the installer exits programming mode."
          },
          "03 -- DLS Lead IN ✔": {
            "Description": "Report remote programming session (DLS) started."
          },
          "04 -- DLS Lead OUT ✔": {"Description": "Report DLS session ended."},
          "05 -- SA Lead IN": {
            "Description": "Report a stand-alone session start (SA)."
          },
          "06 -- SA Lead OUT": {
            "Description": "Report the end of a stand-alone session (SA)."
          },
          "07 -- Event Buffer 75% Full ✔": {
            "Description": "Report if event buffer is nearly full."
          }
        },
        "313 -- Maintenance Events 3": {
          "Description": "Firmware update events (begin, success, fail).",
          "01 -- Firmware Update Begin ✔": {
            "Description": "Report the start of a firmware update process."
          },
          "02 -- Firmware Update Success ✔": {
            "Description": "Report a successful firmware update completion."
          },
          "03 -- Firmware Update Fail ✔": {
            "Description": "Report a failure during firmware update."
          }
        },
        "314 -- Maintenance Events 4": {
          "Description": "Gas trouble, heat trouble, freeze trouble, sensor probe disconnect, etc.",
          "01 -- Gas Trouble ✔": {
            "Description": "Report trouble from a gas detection device."
          },
          "02 -- Gas Trouble Restore ✔": {
            "Description": "Report when the gas trouble condition is resolved."
          },
          "03 -- Heat Trouble ✔": {
            "Description": "Report high heat or heat sensor trouble condition."
          },
          "04 -- Heat Trouble Restore ✔": {
            "Description": "Report restoring heat sensor trouble."
          },
          "05 -- Freeze Trouble ✔": {
            "Description": "Report if freeze or low-temperature trouble is detected."
          },
          "06 -- Freeze Trouble Restore ✔": {
            "Description": "Report clearing the freeze trouble condition."
          },
          "07 -- Probe Disconnected ✔": {
            "Description": "Report if an external temperature probe is disconnected."
          },
          "08 -- Probe Disconnect Restore ✔": {
            "Description": "Report when the probe is reconnected."
          }
        },
        "321 -- Receiver Events": {
          "Description": "Events related to receiver communication trouble and restore states.",
          "02 -- Receiver 1 FTC Restore ✔": {
            "Description": "Report that receiver 1's fail-to-communicate condition was resolved."
          },
          "04 -- Receiver 2 FTC Restore ✔": {
            "Description": "Report clearing of fail-to-communicate on receiver 2."
          },
          "06 -- Receiver 3 FTC Restore ✔": {
            "Description": "Report clearing of fail-to-communicate on receiver 3."
          },
          "08 -- Receiver 4 FTC Restore ✔": {
            "Description": "Report clearing of fail-to-communicate on receiver 4."
          }
        },
        "331 -- Module Events 1": {
          "Description": "AC/battery troubles on modules, restore states, etc.",
          "01 -- Module AC Trouble ✔": {
            "Description": "Report AC trouble on an expansion or communicator module."
          },
          "02 -- Module AC Trouble Restore ✔": {
            "Description": "Report AC trouble is cleared on that module."
          },
          "03 -- Module Battery Trouble ✔": {
            "Description": "Report battery trouble on a module if it supports a backup battery."
          },
          "04 -- Module Battery Trouble Restore ✔": {
            "Description": "Report the battery trouble is resolved."
          },
          "05 -- Module Battery Absent ✔": {
            "Description": "Report if module’s battery is missing or disconnected."
          },
          "06 -- Module Battery Absent Restore ✔": {
            "Description": "Report the battery is reconnected on that module."
          }
        },
        "332 -- Module Events 2": {
          "Description": "Low voltage, supervisory, aux trouble on expansion modules.",
          "01 -- Module Low Voltage ✔": {
            "Description": "Report if the module’s supply voltage is too low."
          },
          "02 -- Module Low Voltage Restore ✔": {
            "Description": "Report normal voltage restored on the module."
          },
          "03 -- Module Supervisory ✔": {
            "Description": "Report a supervisory condition on the module (e.g., lost comm)."
          },
          "04 -- Module Supervisory Restore ✔": {
            "Description": "Report the module’s supervisory condition is cleared."
          },
          "05 -- Module Aux Trouble ✔": {
            "Description": "Report trouble on the module’s auxiliary output (over current, etc.)."
          },
          "06 -- Module Aux Trouble Restore ✔": {
            "Description": "Report clearing of that module’s aux trouble."
          }
        },
        "335 -- Module Events 5": {
          "Description": "Faults on module outputs, etc.",
          "01 -- Output 1 Fault ✔": {
            "Description": "Report a fault on output 1 of the module."
          },
          "02 -- Output 1 Fault Restore ✔": {
            "Description": "Report clearing that output 1 fault."
          }
        },
        "351 -- Alternate Communicator 1": {
          "Description": "Events for cellular/IP communicator (comm fault, radio/SIM failure).",
          "01 -- Alt. Comm. Module Comm Fault ✔": {
            "Description": "Report if alternate communicator cannot transmit data."
          },
          "02 -- Alt. Comm. Module Comm Fault Restore ✔": {
            "Description": "Report communication is restored for the alternate communicator."
          },
          "07 -- Alt. Comm. Radio/SIM Failure ✔": {
            "Description": "Report if the radio or SIM card in the communicator fails."
          },
          "08 -- Alt. Comm. Radio/SIM Failure Restore ✔": {
            "Description": "Report radio or SIM operation has been restored."
          }
        },
        "352 -- Alternate Communicator 2": {
          "Description": "Network fault events for alternate communicator (Ethernet, cellular).",
          "01 -- Alternate Comm. Network Fault ✔": {
            "Description": "Report network trouble on alt communicator (e.g., no IP link)."
          },
          "02 -- Alt. Comm. Network Fault Restore ✔": {
            "Description": "Report restoring the alt communicator’s network connection."
          },
          "05 -- Alt. Comm. Ethernet ✔": {
            "Description": "Report an Ethernet trouble condition if encountered."
          },
          "06 -- Alt. Comm. Ethernet Trouble Restore ✔": {
            "Description": "Report clearing the Ethernet trouble on alt communicator."
          }
        },
        "354 -- Alternate Communicator 4": {
          "Description": "Receiver usage events for alt communicator (1–4), plus restore states.",
          "01 -- Alt. Comm Receiver 1 ✔": {
            "Description": "Report that alt comm is transmitting to receiver 1."
          },
          "02 -- Alt. Comm Receiver 1 Restore ✔": {
            "Description": "Report clearing that event for receiver 1."
          },
          "03 -- Alt. Comm Receiver 2 ✔": {
            "Description": "Report alt comm usage with receiver 2."
          },
          "04 -- Alt. Comm Receiver 2 Restore ✔": {
            "Description": "Report clearing the alt comm usage with receiver 2."
          },
          "05 -- Alt. Comm Receiver 3 ✔": {
            "Description": "Report alt comm usage with receiver 3."
          },
          "06 -- Alt. Comm Receiver 3 Restore ✔": {
            "Description": "Report clearing the alt comm usage with receiver 3."
          },
          "07 -- Alt. Comm Receiver 4 ✔": {
            "Description": "Report alt comm usage with receiver 4."
          },
          "08 -- Alt. Comm Receiver 4 Restore ✔": {
            "Description": "Report clearing the alt comm usage with receiver 4."
          }
        },
        "355 -- Alternate Communicator 5": {
          "Description": "Receiver supervision failure for alt communicator (1–4).",
          "01 -- Alt. Comm Receiver 1 Supervision Failure ✔": {
            "Description": "Report if receiver 1 is not responding to alt communicator pings."
          },
          "02 -- Alt. Comm Receiver 1 Supervision Failure Restore ✔": {
            "Description": "Report restoring alt comm supervision for receiver 1."
          },
          "03 -- Alt. Comm Receiver 2 Supervision Failure ✔": {
            "Description": "Report supervision failure on receiver 2."
          },
          "04 -- Alt. Comm Receiver 2 Supervision Failure Restore ✔05 -- Alt. Comm Receiver 3 Supervision Failure ✔": {
            "Description": "Note: This line lumps #04 restore & #05 new failure together due to snippet formatting."
          },
          "06 -- Alt. Comm Receiver 3 Supervision Failure Restore ✔": {
            "Description": "Receiver 3 supervision restored."
          },
          "07 -- Alt. Comm Receiver 4 Supervision Failure ✔": {
            "Description": "Supervision lost with receiver 4."
          },
          "08 -- Alt. Comm Receiver 4 Supervision Failure Restore ✔": {
            "Description": "Receiver 4 supervision is restored."
          }
        },
        "361 -- Wireless Device Events": {
          "Description": "Covers wireless device AC fail, low battery, fault states, etc.",
          "01 -- Device AC Fail ✔": {
            "Description": "Wireless device lost AC power if it supports AC."
          },
          "02 -- Device AC Restore ✔": {
            "Description": "Wireless device AC power is restored."
          },
          "03 -- Device Low Battery ✔": {
            "Description": "Wireless device battery is low."
          },
          "04 -- Device Low Battery Restore ✔": {
            "Description": "Wireless device battery returns to normal voltage."
          },
          "05 -- Device Fault ✔": {
            "Description": "Device fault or supervisory issue is detected."
          },
          "06 -- Device Fault Restore ✔": {
            "Description": "Wireless device fault is cleared."
          }
        },
        "401-- System Test Events": {
          "Description": "Periodic test transmissions, walk test, system test logs.",
          "01 -- Walk Test Start ✔": {
            "Description": "Report beginning of walk test mode (installer testing)."
          },
          "02 -- Walk Test End ✔": {
            "Description": "Report end of walk test mode."
          },
          "03 -- Periodic Test Transmission ✔": {
            "Description": "Report scheduled or manual test transmission event."
          },
          "04 -- Periodic Test Transmission with Trouble ✔": {
            "Description": "Test transmission completed but a trouble was present."
          },
          "05 -- System Test ✔": {
            "Description": "Report if a general system test was performed."
          }
        }
      }
    },
    "[309] -- [385] Communications (p: 106)": {
      "Description": "Configure call directions, account codes, communicator formats, dialer attempts, backup comm options, etc.",
      "309 System Call Direction (p: 106)": {
        "Description": "Specifies which events are sent to which receivers (maintenance, test transmissions, etc.).",
        "001-- Maintenance Events/Restores (all troubles except tampers)": {
          "Description": "Call direction for system maintenance or restore events (non-tamper).",
          "1 -- Receiver 1 ✔": {
            "Description": "Send these maintenance events to Receiver 1."
          },
          "2 -- Receiver 2": {
            "Description": "Enable if these events should also go to Receiver 2."
          },
          "3 -- Receiver 3": {
            "Description": "Enable for Receiver 3 reporting."
          },
          "4 -- Receiver 4": {"Description": "Enable for Receiver 4 reporting."}
        },
        "002 -- Test Transmission Events": {
          "Description": "Directs test transmissions to one or more receivers.",
          "1 -- Receiver 1 ✔": {
            "Description": "Send test transmissions to Receiver 1."
          },
          "2 -- Receiver 2": {
            "Description": "Send tests to Receiver 2 if desired."
          },
          "3 -- Receiver 3": {
            "Description": "Send tests to Receiver 3 if desired."
          },
          "4 -- Receiver 4": {
            "Description": "Send tests to Receiver 4 if desired."
          }
        }
      },
      "310 Account Codes (p: 107)": {
        "Description": "Main system account code and partition account codes used for central station reporting.",
        "000 -- System Account Code (FFFF)": {
          "Description": "Enter the main system account code (4 or 6 digits)."
        },
        "001-008 -- Partition 1-8 Account Code (FFFF)": {
          "Description": "Each partition can have its own account code for reporting."
        }
      },
      "311-318 Partition 1-8 Call Direction (p: 107)": {
        "Description": "Per-partition event routing for burglary, tamper, open/close, etc.",
        "001 -- Partition Burglary Alarm/Restore Call Direction": {
          "Description": "Where burglary alarms/restores for this partition are sent.",
          "1 -- Receiver 1 ✔": {
            "Description": "Send burglary alarm/restores to Receiver 1."
          },
          "2 -- Receiver 2": {"Description": "Send to Receiver 2 if enabled."},
          "3 -- Receiver 3": {"Description": "Send to Receiver 3 if enabled."},
          "4 -- Receiver 4": {"Description": "Send to Receiver 4 if enabled."}
        },
        "002 -- Partition Tamper (Including System Tampers)/Restore Call Direction": {
          "Description": "Routing tamper events for this partition (and system tampers if partition-based).",
          "1 -- Receiver 1 ✔": {
            "Description": "Send tamper events to Receiver 1."
          },
          "2 -- Receiver 2": {
            "Description": "Enable if tamper events also go to Receiver 2."
          },
          "3 -- Receiver 3": {
            "Description": "Enable if tamper events also go to Receiver 3."
          },
          "4 -- Receiver 4": {
            "Description": "Enable if tamper events also go to Receiver 4."
          }
        },
        "003 -- Partition Opening/Closing Call Direction": {
          "Description": "Direct open/close (arm/disarm) signals for this partition to selected receivers.",
          "1 -- Receiver 1": {
            "Description": "Enable if open/close events go to Receiver 1."
          },
          "2 -- Receiver 2": {"Description": "Enable for Receiver 2."},
          "3 -- Receiver 3": {"Description": "Enable for Receiver 3."},
          "4 -- Receiver 4": {"Description": "Enable for Receiver 4."}
        }
      },
      "350 Communicator Formats (03 - Contact ID, 04 - SIA) (p: 107)": {
        "Description": "Select reporting format (Contact ID, SIA, etc.) for each receiver.",
        "001-- Communicator Format - Receiver 1": {
          "Description": "Set the format type for Receiver 1."
        },
        "002-- Communicator Format - Receiver 2": {
          "Description": "Set the format type for Receiver 2."
        },
        "003-- Communicator Format - Receiver 3": {
          "Description": "Set the format type for Receiver 3."
        },
        "004-- Communicator Format - Receiver 4": {
          "Description": "Set the format type for Receiver 4."
        }
      },
      "377 Communication Variables (p: 108)": {
        "Description": "Swinger shutdown attempts, zone TX delays, AC fail delay, TLM trouble, test cycle, etc.",
        "001 -- Swinger Shutdown Attempts": {
          "Description": "Number of alarms allowed per zone before it’s automatically shut down.",
          "-- Alarms and Restore (003) (CP-01 002 sec.)": "",
          "-- Tampers and Restore (003)": "",
          "-- Maintenance and Restore (003)": ""
        },
        "002 -- Communication Delays": {
          "Description": "Zone TX delay, AC fail TX delay, TLM trouble delay, WLS low battery TX delay, etc.",
          "-- Zone Transmission (TX) Delay (000 sec.) (CP-01 030 sec.)": "",
          "-- AC Failure Communication (TX) Delay (030 min./hrs.)": "",
          "-- TLM Trouble Delay (010 sec. x 3)": "",
          "-- WLS Zone Low Battery Transmission Delay (007 days)": "",
          "-- Delinquency Transmission Delay (030 hours/days)": "",
          "-- Communications Cancel Window (000) ((CP-01 005 min.)": ""
        },
        "003 -- Periodic Test Transmission Cycle (030 hrs./days) (timer test 001 for daily)": {
          "Description": "Interval for periodic test signals in hours or days."
        },
        "004 -- Periodic Test Transmission Time of Day (9999) (timer test time of the day HH:MM)": {
          "Description": "Exact time (HHMM) to send daily/periodic test transmissions."
        },
        "011 -- Maximum Dialing Attempts (005)": {
          "Description": "How many times the panel tries each number before fail to communicate."
        },
        "012 -- PSTN Delay (003 sec.)": {
          "Description": "Delay before sending DTMF or pulse digits on PSTN lines."
        },
        "013 -- Delay Between Force Attempts (020 sec.)": {
          "Description": "Time between forced dial attempts if first fails."
        },
        "014 -- Post Dial Wait for Handshake (040 sec.)": {
          "Description": "Time to wait for central station handshake after dialing."
        },
        "015 -- T-Link Wait for Ack (060 sec.)": {
          "Description": "Time to wait for an acknowledgement from the T-Link (Ethernet) communicator."
        },
        "016 -- IP/Cellular Fault Check Timer (010 )": {
          "Description": "Frequency (in sec/min) to check for IP or cellular faults."
        }
      },
      "380 Communicator Option 1 (p: 110)": {
        "Description": "Basic communicator toggles (enable comms, restore on bell timeout, parallel comms).",
        "1 -- Communications Enabled ✔": {
          "Description": "Must be on for the panel to send signals to any receiver."
        },
        "2 -- Restore on Bell Timeout": {
          "Description": "If bell times out, send an alarm restore automatically."
        },
        "3 -- Pulse Dialing": {
          "Description": "Use pulse dialing on PSTN lines (instead of DTMF) if needed."
        },
        "4 -- Pulse Dial After 5th Attempt": {
          "Description": "Switch to pulse dialing if 5 DTMF attempts fail."
        },
        "5 -- Parallel Communications": {
          "Description": "Allows parallel usage of multiple comm paths at once."
        },
        "6 -- Alternate Dial ✔": {
          "Description": "Toggle if the panel should alternate between phone numbers or lines."
        },
        "7 -- Reduced Dialing Attempts": {
          "Description": "Reduce the max attempts if calls fail repeatedly."
        },
        "8 -- Activity Delinquency": {
          "Description": "Relates to sending a delinquency signal if no activity for a set time."
        }
      },
      "381 Communicator Option 2 (p: 111)": {
        "Description": "Ringback methods, closing confirmation, comm priority.",
        "1 -- Keypad Ringback": {
          "Description": "Keypad beeps to confirm successful transmission to CS."
        },
        "2 -- Bell Ringback": {
          "Description": "Bell squawks if communicator handshake was successful."
        },
        "4 -- Closing Confirmation": {
          "Description": "System confirms an arming event was reported successfully."
        },
        "8 -- Communications Priority": {
          "Description": "Prioritizes certain comm paths if multiple are enabled."
        }
      },
      "382 Communicator Option 3 (p: 111)": {
        "Description": "Test transmission receiver selection, call waiting cancel, alt comm enabling, TLM hours/min.",
        "1 -- Test Transmission Receiver": {
          "Description": "Choose which receiver gets the test transmissions by default."
        },
        "2 -- Walk Test Communication (UK ✔)": {
          "Description": "Option to send events triggered in walk test for UK compliance."
        },
        "4 -- Call Waiting Cancel": {
          "Description": "Enable the call-waiting-cancel string before dialing."
        },
        "5 -- Alternate Communicator Enable": {
          "Description": "Allows use of IP/cellular module if installed."
        },
        "6 -- AC Failure TX (Communication) Delay in Hours / Minutes": {
          "Description": "If set, AC fail is reported after a certain hours/min delay."
        },
        "8 -- Tamper Limit (UK ✔)": {
          "Description": "Limits tamper signals or requires specific tamper handling per UK regs."
        }
      },
      "383 Communicator Option 4 (p: 112)": {
        "Description": "Account code phone usage, extended code length, FTC events, etc.",
        "1 -- Phone Number Account Code": {
          "Description": "Use phone number-based account codes if needed."
        },
        "2 -- 6-Digit Account Code": {
          "Description": "Enable 6-digit reporting codes for more detail."
        },
        "5 -- Communicate FTC (failure to communicate) Events": {
          "Description": "Panel will send an event code if it experiences an FTC."
        }
      },
      "384 Communicator Backup Options (p: 112)": {
        "Description": "Specifies which receivers are used for backup if the primary path fails.",
        "2 -- Backup Options - Receiver 2 ✔": {
          "Description": "Use receiver 2 as a backup path if receiver 1 fails."
        },
        "3 -- Backup Options - Receiver 3": {
          "Description": "Use receiver 3 as backup if the previous fails."
        },
        "4 -- Backup Options - Receiver 4": {
          "Description": "Use receiver 4 as backup if the previous fails."
        }
      },
      "385 Audio Module Talk/Listen Mask (p: 112)": {
        "Description": "Specifies which phone numbers or lines can engage in 2-way audio (talk/listen).",
        "1 -- Talk/Listen on Phone Number 1": {
          "Description": "Enable 2-way audio on calls made via phone number 1."
        },
        "2 -- Talk/Listen on Phone Number 2": {
          "Description": "Enable 2-way audio on calls made via phone number 2."
        },
        "3 -- Talk/Listen on Phone Number 3": {
          "Description": "Enable 2-way audio on calls made via phone number 3."
        },
        "4 -- Talk/Listen on Phone Number 4": {
          "Description": "Enable 2-way audio on calls made via phone number 4."
        }
      }
    },
    "[401] -- [560] DLS Programming (p: 113)": {
      "Description": "Options for remote upload/download (DLS), local SA (stand-alone) programming, phone callbacks, and related timers.",
      "401 DLS/SA Options (p: 113)": {
        "Description": "Configure how the panel answers DLS calls, double-call detection, user-enabled DLS, and other remote programming options.",
        "1 -- Double Call (C ✔)": {
          "Description": "Requires two incoming calls in quick succession for the panel to pick up (false-answer prevention)."
        },
        "2 -- User Enables DLS ✔ (C off)": {
          "Description": "If enabled, the user must activate DLS mode locally before remote programming can occur."
        },
        "3 -- DLS Callback": {
          "Description": "Panel hangs up, then calls back the DLS computer for a more secure connection if enabled."
        },
        "4 -- User Call Up": {
          "Description": "Allows a user-initiated call-up to the DLS software (dial out to the remote programmer)."
        },
        "6 -- Panel Call-Up and Baud Rate (300 Baud DLS)": {
          "Description": "Sets the default baud rate for DLS sessions and whether the panel can initiate a call to DLS."
        },
        "7 -- Alt. Comm DLS ✔": {
          "Description": "Allows DLS sessions via an alternate communicator module (e.g., IP/cellular) if installed."
        }
      },
      "402 DLS Phone Number Programming (31-digit decimal) (p: 114)": {
        "Description": "Store the phone number(s) for the panel to dial out to DLS if callback or user call-up is used.",
        "PSTN = Public switched telephone network": {
          "Description": "Indicates these numbers are for landline (PSTN) connections."
        }
      },
      "403 DLS Access Code (default is based on model) (p: 114)": {
        "Description": "Code required for authentication when connecting via DLS, varies by model.",
        "HS2128 Models (212800)": {
          "Description": "Default DLS code for HS2128-based panels."
        },
        "HS2064 Models (206400)": {
          "Description": "Default DLS code for HS2064-based panels."
        },
        "HS2032 Models (203200)": {
          "Description": "Default DLS code for HS2032-based panels."
        },
        "HS2016 Models (201600)": {
          "Description": "Default DLS code for HS2016-based panels."
        }
      },
      "404 DLS/SA Panel ID (default is based on model) (p: 114)": {
        "Description": "Unique panel identifier (ID) for DLS or stand-alone access, defaults depend on panel model.",
        "HS2128 Models (2128000000)": {
          "Description": "Default ID for HS2128."
        },
        "HS2064 Models (2064000000)": {
          "Description": "Default ID for HS2064."
        },
        "HS2032 Models (2032000000)": {
          "Description": "Default ID for HS2032."
        },
        "HS2016 Models (2016000000)": {"Description": "Default ID for HS2016."}
      },
      "405 PSTN Double Call Timer (060 sec.) (p: 114)": {
        "Description": "Sets how many seconds between calls for double-call detection to register."
      },
      "406 PSTN Number of Rings to Answer On (000) (TIS 008) (p: 114)": {
        "Description": "Number of rings before the panel answers an incoming call for DLS or programming."
      },
      "407 SA Access Code (FFFFFF)": {
        "Description": "Access code used for stand-alone (SA) local programming sessions if applicable."
      },
      "410 Automatic DLS Options (p: 115)": {
        "Description": "Defines whether the panel automatically connects to DLS on certain events or intervals.",
        "001 -- Automatic DLS Toggle Options": {
          "Description": "Select triggers for automatic DLS sessions (periodic, event buffer 75% full, programming changes).",
          "1 -- Periodic DLS": {
            "Description": "Panel auto-initiates a DLS session on a set schedule."
          },
          "3 -- DLS on Event Buffer 75% Full": {
            "Description": "Panel calls DLS if the event buffer is 75% full."
          },
          "8 -- DLS On Programming Change": {
            "Description": "Panel calls DLS after significant local programming changes."
          }
        },
        "002 -- Periodic DLS Days (000 days)": {
          "Description": "How often (in days) the panel attempts a periodic DLS session (0=disabled)."
        },
        "003 -- Periodic DLS Time (0000)": {
          "Description": "Time of day (HHMM) for the periodic DLS session to occur."
        },
        "007 -- Delay Call Window": {
          "Description": "Time window to wait before establishing a DLS call automatically.",
          "-- Delay Call Window Start (0000)": {
            "Description": "Start time (HHMM) for the call window."
          },
          "-- Delay Call Window End (0000)": {
            "Description": "End time (HHMM) for the call window."
          }
        }
      },
      "560 Virtual Inputs (000) (p: 115)": {
        "Description": "Defines up to 32 virtual (software-based) inputs if needed for advanced logic or IP triggers.",
        "001 - 032 -- Virtual Input 1-32": {
          "Description": "Assign or configure each virtual input's function, attributes, or triggers."
        }
      }
    },
    "[601] -- [714] Schedule Programming (p: 115)": {
      "Description": "Configure up to 4 schedules for timed arming, PGMs, or other automated tasks, plus holiday dates.",
      "601-604 Programming Schedule 1-4 (p: 115)": {
        "Description": "Each schedule can have multiple intervals with start/end times and day/holiday assignments.",
        "101 -- Interval 1 Start Time (0000)": {
          "Description": "Set the HHMM start time for interval 1 of this schedule."
        },
        "102 -- Interval 1 End Time (0000)": {
          "Description": "Set the HHMM end time for interval 1."
        },
        "103 -- Interval 1 Days Assignment": {
          "Description": "Select which days of the week interval 1 applies to.",
          "01 -- Sunday": {
            "Description": "Interval 1 active on Sundays if checked."
          },
          "02 -- Monday": {"Description": "Interval 1 active on Mondays."},
          "03 -- Tuesday": {"Description": "Interval 1 active on Tuesdays."},
          "04 -- Wednesday": {
            "Description": "Interval 1 active on Wednesdays."
          },
          "05 -- Thursday": {"Description": "Interval 1 active on Thursdays."},
          "06 -- Friday": {"Description": "Interval 1 active on Fridays."},
          "07 -- Saturday": {"Description": "Interval 1 active on Saturdays."}
        },
        "104 -- Interval 1 Holiday Assignment": {
          "Description": "Assign this interval to specific holiday groups.",
          "01 -- Holiday 1": {
            "Description": "Interval 1 active on Holiday Group 1."
          },
          "02 -- Holiday 2": {
            "Description": "Interval 1 active on Holiday Group 2."
          },
          "03 -- Holiday 3": {
            "Description": "Interval 1 active on Holiday Group 3."
          },
          "04 -- Holiday 4": {
            "Description": "Interval 1 active on Holiday Group 4."
          }
        },
        "201 -- Interval 2 Start Time (0000)": {
          "Description": "Start time for interval 2 of the schedule."
        },
        "202 -- Interval 2 End Time (0000)": {
          "Description": "End time for interval 2 of the schedule."
        },
        "203 -- Interval 2 Days Assignment": {
          "Description": "Select days of the week for interval 2 to be active.",
          "01 -- Sunday": {"Description": "Interval 2 on Sunday if checked."},
          "02 -- Monday": {"Description": "Interval 2 on Monday."},
          "03 -- Tuesday": {"Description": "Interval 2 on Tuesday."},
          "04 -- Wednesday": {"Description": "Interval 2 on Wednesday."},
          "05 -- Thursday": {"Description": "Interval 2 on Thursday."},
          "06 -- Friday": {"Description": "Interval 2 on Friday."},
          "07 -- Saturday": {"Description": "Interval 2 on Saturday."}
        },
        "204 -- Interval 2 Holiday Assignment": {
          "Description": "Assign interval 2 to specific holiday groups.",
          "01 -- Holiday 1": {
            "Description": "Interval 2 active on Holiday 1."
          },
          "02 -- Holiday 2": {
            "Description": "Interval 2 active on Holiday 2."
          },
          "03 -- Holiday 3": {
            "Description": "Interval 2 active on Holiday 3."
          },
          "04 -- Holiday 4": {"Description": "Interval 2 active on Holiday 4."}
        },
        "301 -- Interval 3 Start Time (0000)": {
          "Description": "Start time for interval 3 in this schedule."
        },
        "302 -- Interval 3 End Time (0000)": {
          "Description": "End time for interval 3 in this schedule."
        },
        "303 -- Interval 3 Days Assignment": {
          "Description": "Select days for interval 3 to run.",
          "01 -- Sunday": {"Description": "Interval 3 on Sunday."},
          "02 -- Monday": {"Description": "Interval 3 on Monday."},
          "03 -- Tuesday": {"Description": "Interval 3 on Tuesday."},
          "04 -- Wednesday": {"Description": "Interval 3 on Wednesday."},
          "05 -- Thursday": {"Description": "Interval 3 on Thursday."},
          "06 -- Friday": {"Description": "Interval 3 on Friday."},
          "07 -- Saturday": {"Description": "Interval 3 on Saturday."}
        },
        "304 -- Interval 3 Holiday Assignment": {
          "Description": "Assign interval 3 to holiday groups 1-4.",
          "01 -- Holiday 1": {"Description": "Interval 3 on Holiday 1."},
          "02 -- Holiday 2": {"Description": "Interval 3 on Holiday 2."},
          "03 -- Holiday 3": {"Description": "Interval 3 on Holiday 3."},
          "04 -- Holiday 4": {"Description": "Interval 3 on Holiday 4."}
        },
        "401 -- Interval 4 Start Time (0000)": {
          "Description": "Start time for interval 4."
        },
        "402 -- Interval 4 End Time (0000)": {
          "Description": "End time for interval 4."
        },
        "403 -- Interval 4 Days Assignment": {
          "Description": "Days of the week interval 4 is active.",
          "01 -- Sunday": {"Description": "Interval 4 on Sunday."},
          "02 -- Monday": {"Description": "Interval 4 on Monday."},
          "03 -- Tuesday": {"Description": "Interval 4 on Tuesday."},
          "04 -- Wednesday": {"Description": "Interval 4 on Wednesday."},
          "05 -- Thursday": {"Description": "Interval 4 on Thursday."},
          "06 -- Friday": {"Description": "Interval 4 on Friday."},
          "07 -- Saturday": {"Description": "Interval 4 on Saturday."}
        },
        "404 -- Interval 4 Holiday Assignment": {
          "Description": "Assign interval 4 to one or more holiday groups.",
          "01 -- Holiday 1": {"Description": "Interval 4 on Holiday 1."},
          "02 -- Holiday 2": {"Description": "Interval 4 on Holiday 2."},
          "03 -- Holiday 3": {"Description": "Interval 4 on Holiday 3."},
          "04 -- Holiday 4": {"Description": "Interval 4 on Holiday 4."}
        }
      },
      "711-714 Holiday Group 1-4 (p: 116)": {
        "Description": "Programming dates for up to 4 holiday groups. Each group can have multiple dates for scheduling exceptions.",
        "001 -- 099 Holiday Group 1-4 Date 1-99 (000000, MMDDYY)": {
          "Description": "Enter specific holiday dates in MMDDYY format (up to 99 per group)."
        }
      }
    },
    "[802] Audio Station Programming (p: 116)": {
      "Description": "Configure the HSM2955 audio station assignments, 2-way audio triggers, record options, and call-back parameters.",
      "802 Audio Station Assignment (p: 116)": {
        "Description": "Assign which zones use an audio station, set 2-way audio triggers, record times, etc.",
        "001 - 128 -- Zone Audio Station Assignment 1 - 128 (00)": {
          "Description": "For each zone (1–128), assign an audio station number (00 if not used)."
        },
        "600 -- 2-Way Audio Trigger Option 1": {
          "Description": "Select which alarm events (tamper, panic, duress, etc.) can trigger 2-way audio.",
          "01 -- Tampers": {
            "Description": "Zone or module tampers can initiate 2-way audio if enabled."
          },
          "03 -- [A] (M) Key Alarm ✔": {
            "Description": "If the [A]/[M] key triggers an alarm, 2-way audio can start."
          },
          "04 -- [P] Key Alarm ✔": {
            "Description": "Panic ([P]) alarm can initiate 2-way audio if set."
          },
          "05 -- Duress Alarm ✔": {
            "Description": "Duress alarm can activate 2-way audio for verification."
          },
          "06 -- Opening After Alarm ✔": {
            "Description": "If the system is disarmed post-alarm, 2-way audio can engage."
          },
          "07 -- Future Use": {
            "Description": "Reserved for additional trigger options in future firmware."
          },
          "08 -- Zone Supervision Alarm": {
            "Description": "If a supervised zone triggers an alarm, 2-way audio can start."
          }
        },
        "603 -- 2-Way Audio Control Option 1": {
          "Description": "Options for controlling how 2-way audio sessions function (listen modes, siren active, user call-in, etc.).",
          "01 -- Future Use": {
            "Description": "Placeholder for later expansion."
          },
          "02 -- Listen to all zones / Listen to zones in alarm ✔": {
            "Description": "Either open microphone for all zones or just zones in alarm."
          },
          "03 -- Future Use": {
            "Description": "Placeholder for later expansion."
          },
          "04 -- Siren Active During 2-Way Audio": {
            "Description": "If enabled, siren may still sound while 2-way audio is active."
          },
          "05 -- Hang-Up Auto Detection": {
            "Description": "Panel ends 2-way audio if it detects call disconnect."
          },
          "06 -- User Call-In": {
            "Description": "Allows user to call in and activate 2-way audio from outside."
          },
          "07 -- Future Use": {
            "Description": "Placeholder for potential additional controls."
          },
          "08 -- 2-Way Audio Initiated by CS ✔": {
            "Description": "Central Station can initiate 2-way audio session remotely."
          }
        },
        "605 -- Record Options": {
          "Description": "Audio recording settings for capturing alarm verification or on-site audio.",
          "01 -- Audio Capture Enable ✔": {
            "Description": "Panel will record audio during the 2-way session for verification."
          },
          "02 -- Erase on FTC (Fail to Communicate)": {
            "Description": "Recorded audio is erased if the communicator fails to transmit."
          }
        },
        "606 -- Audio Station Record Control Option 1": {
          "Description": "Which audio stations (1–4) can record during a 2-way session.",
          "01 -- Audio Station 1 Record ✔": {
            "Description": "Enable recording on audio station 1."
          },
          "02 -- Audio Station 2 Record ✔": {
            "Description": "Enable recording on audio station 2."
          },
          "03 -- Audio Station 3 Record ✔": {
            "Description": "Enable recording on audio station 3."
          },
          "04 -- Audio Station 4 Record ✔": {
            "Description": "Enable recording on audio station 4."
          }
        },
        "610 -- Call Back / Recovery Window Duration (05)": {
          "Description": "Time window (minutes) the panel waits for callback or recovers after a dropped call."
        },
        "611 -- Call Back Acknowledge code (999999)": {
          "Description": "Code panel expects from the remote station during callback."
        },
        "612 -- Answering Machine Bypass (00)": {
          "Description": "Number of rings or sequence to bypass an answering machine if needed."
        },
        "613 -- Double Call Timer (030)": {
          "Description": "Seconds between calls for double-call detection to pick up."
        },
        "614 -- Number of Rings to Answer (00)": {
          "Description": "Rings before the panel answers for 2-way audio or programming calls."
        },
        "615 -- Audio Duration (90 sec.)": {
          "Description": "Length of a 2-way audio session in seconds."
        },
        "616 -- Record Time (105 sec.)": {
          "Description": "Duration of audio recording if capture is enabled."
        },
        "617 -- Erase Timer (15 min.)": {
          "Description": "Time after which recorded audio is automatically erased if not saved or uploaded."
        },
        "620 -- Audio Station Tamper Option 1": {
          "Description": "Which audio stations have tampers enabled (cover or housing).",
          "01 -- Audio Station 1 Tamper": {
            "Description": "Enable tamper detection on audio station 1."
          },
          "02 -- Audio Station 2 Tamper": {
            "Description": "Enable tamper detection on audio station 2."
          },
          "03 -- Audio Station 3 Tamper": {
            "Description": "Enable tamper detection on audio station 3."
          },
          "04 -- Audio Station 4 Tamper": {
            "Description": "Enable tamper detection on audio station 4."
          }
        },
        "999 -- Reset Module Programming to Factory Defaults": {
          "Description": "Revert the HSM2955 or audio station settings to defaults.",
          "[Installer code] > 999 or [*]": {
            "Description": "Enter installer code, then 999 or press [*] to confirm factory reset."
          }
        }
      }
    },
    "[804] -- [851] Wireless Programming (p: 116)": {
      "Description": "Controls enrollment of wireless zones, keys, sirens, repeaters, keypads, plus supervisory windows and jam detection.",
      "804 Wireless Programming (p: 116)": {
        "Description": "Enroll new wireless devices (zones, keyfobs, sirens, keypads), configure EOL, and manage replacements/deletions.",
        "000 -- WLS Device Enrollment": {
          "Description": "Auto-learn or manually enroll wireless devices (zones, keys, sirens, etc.).",
          "Zones:": {
            "Description": "Basic info for enrolling a wireless zone device.",
            "Zone # (3-digit decimal)": {
              "Description": "Specifies which zone number this wireless device will occupy."
            },
            "Zone Type / Definition (2-digit decimal)": {
              "Description": "Assign the zone definition (e.g. Delay 1, Instant, 24-hour)."
            },
            "Partition Assignment": {
              "Description": "Which partition(s) this wireless zone belongs to."
            },
            "Zone Label (LCD only)": {
              "Description": "Optional label for display on LCD keypads."
            }
          },
          "WLS Keys:": {
            "Description": "Set up wireless keyfobs: partition assignment, user code linking, label.",
            "WLS Key #": {"Description": "Fob slot number (1–32)."},
            "Partition Assignment": {
              "Description": "Which partition(s) the fob can arm/disarm."
            },
            "User Assignment": {
              "Description": "Bind the fob to a specific user code for disarm authority."
            },
            "WLS Key Label": {
              "Description": "LCD label describing this keyfob."
            }
          },
          "Sirens:": {
            "Description": "Enroll wireless sirens here.",
            "Siren #": {"Description": "Siren slot number (1–16)."},
            "Partition Assignment": {
              "Description": "Which partition(s) the siren belongs to, for alarm sounding."
            },
            "Siren Label (LCD only)": {
              "Description": "Optional label for the wireless siren."
            }
          },
          "Keypads": {
            "Description": "Enroll wireless keypads.",
            "Keypad #": {"Description": "Keypad slot number (1–16)."},
            "Partition Assignment": {
              "Description": "Which partitions the keypad can control or display."
            },
            "Keypad Label (LCD only)": {
              "Description": "A name for the keypad (e.g., ‘Front Door Keypad’)."
            }
          },
          "Repeaters:": {
            "Description": "Wireless repeaters extend coverage for remote devices.",
            "Repeater #": {"Description": "Repeater slot number (1–8)."},
            "Repeater Label (LCD only)": {
              "Description": "Optional label for the wireless repeater."
            }
          }
        },
        "001 -- 128 Configure Wireless Zones 1-128": {
          "Description": "After enrollment, configure advanced toggles for each wireless zone (EOL settings, etc.).",
          "001 Device toggles": {
            "Description": "Assign additional attributes (like bypass permission, force arm) to each device."
          },
          "002 Zone EOL": {
            "Description": "Determine if the wireless zone is supervised as single or double EOL in software."
          }
        },
        "551 -- 566 Configure Wireless Sirens 1-16": {
          "Description": "Advanced siren settings (partition mapping, beep patterns, etc.) for each wireless siren slot."
        },
        "601 -- 632 Configure Wireless Keys 1-32": {
          "Description": "Program advanced attributes for wireless keyfobs (button mappings, panic enable, etc.)."
        },
        "701 -- 716 Configure Wireless Keypads 1-16": {
          "Description": "Set advanced features for each wireless keypad (brightness, beep volume, function keys)."
        },
        "801 Jam Detect": {
          "Description": "Options to detect and report RF jamming conditions."
        },
        "802 Supervisory Window": {
          "Description": "How often wireless devices must check in to avoid supervision loss."
        },
        "810 Wireless Options (Only Available if RF Keypad or HOST enrolled)": {
          "Description": "Additional global wireless parameters for an RF keypad or HSM2HOST module.",
          "1 - RF Delinquency": {
            "Description": "Option to signal delinquency if no wireless activity for an extended period."
          },
          "2 - Wireless Supervisory/ RF Jam Alarm": {
            "Description": "Enable alarm or trouble on wireless supervisory or jamming detection."
          },
          "3 - Wireless Tamper": {
            "Description": "Controls if tamper signals from wireless devices are recognized."
          },
          "4 - Fire Supervision": {
            "Description": "Enables special supervision for wireless smoke/fire sensors."
          },
          "5 - Smart Temperature Reporting": {
            "Description": "Enables advanced temperature threshold reporting for certain wireless sensors."
          }
        },
        "841 Visual Verification Programming (Motion Cameras)": {
          "Description": "Configure PGx934 or similar wireless cameras for image-based alarm verification."
        },
        "901 -- 905 Delete Wireless Devices:": {
          "Description": "Remove an enrolled device (zone, key, siren, repeater, keypad).",
          "901 Delete Zones": {
            "Description": "Select zone, press [*] to confirm deletion.",
            "Select Zone > [*] to confirm": {
              "Description": "Panel deletes the enrolled wireless zone from memory."
            }
          },
          "902 Delete WLS Keys": {
            "Description": "Erase an enrolled wireless keyfob from the system."
          },
          "903 Delete Sirens": {
            "Description": "Erase an enrolled wireless siren from the system."
          },
          "904 Delete Repeaters": {
            "Description": "Erase an enrolled wireless repeater from the system."
          },
          "905 Delete Keypads": {
            "Description": "Remove an enrolled wireless keypad."
          }
        },
        "921 -- 925 Replace Wireless Devices:": {
          "Description": "Swap out an enrolled device for a new one without reprogramming all settings.",
          "921 Replace Device (Zones)": {
            "Description": "Select zone and either auto-enroll or manually enter new device ID.",
            "Select Zone > [*] to auto enroll or enter ID": {
              "Description": "Prompt to learn in the new device to replace the old one."
            }
          },
          "922 Replace WLS Keys": {
            "Description": "Swap an existing wireless keyfob with a new one."
          },
          "923 Replace Sirens": {
            "Description": "Swap an existing wireless siren with a new one."
          },
          "924 Replace Repeaters": {
            "Description": "Swap an existing wireless repeater with a new one."
          },
          "925 Replace Keypads": {
            "Description": "Swap an existing wireless keypad with a new device."
          }
        },
        "990 Show All Devices (Shows Devices ID)": {
          "Description": "Display all enrolled wireless devices with IDs (zones, sirens, keys, repeaters, keypads).",
          "001 Zones": {
            "Description": "List all enrolled wireless zones with their unique IDs."
          },
          "002 Repeaters": {"Description": "List enrolled repeaters."},
          "003 Sirens": {"Description": "List enrolled wireless sirens."},
          "004 WLS Keys": {
            "Description": "List all enrolled wireless keyfobs."
          },
          "005 Keypads": {"Description": "List wireless keypads with IDs."}
        },
        "999 Reset Devices to Factory Default": {
          "Description": "Remove all wireless device programming and restore default settings."
        },
        "Refer to the installation instructions provided with the HSM2Host for more wireless programming options.": {
          "Description": "Additional details for advanced wireless configurations are in the HSM2HOST manual."
        }
      },
      "850 Cellular Signal Strength": {
        "Description": "Menu to check the cell signal level for a connected cellular communicator."
      },
      "851 Alternate Communicator Programming": {
        "Description": "Configure advanced IP/cellular communicator settings beyond enrollment.",
        "Refer to the installation instructions provided with the alternate communicator for details.": {
          "Description": "See the specific communicator’s manual for deeper programming steps."
        }
      }
    },
    "[860] -- [899] Keypad Programming (p: 117)": {
      "Description": "Options for assigning keypads to partitions, customizing function keys, brightness, buzzer volume, and more.",
      "860 Display Keypad Slot Number (p: 117)": {
        "Description": "Shows the version and the slot number of the keypad currently in use."
      },
      "861-876 Keypad (1 to 16) Programming": {
        "Description": "Program each keypad’s partition mask, function keys, I/O settings, options, and local messages.",
        "000 -- Keypad Partition Mask": {
          "Description": "Select which partitions this keypad can control or display.",
          "00 -- Global Keypad": {
            "Description": "Keypad operates for all active partitions (global)."
          },
          "01 -- Partition 1 ✔": {
            "Description": "Enable keypad access/visibility to Partition 1."
          },
          "02 -- Partition 2": {
            "Description": "Enable keypad access/visibility to Partition 2."
          },
          "03 -- Partition 3": {
            "Description": "Enable keypad access/visibility to Partition 3."
          },
          "04 -- Partition 4": {
            "Description": "Enable keypad access/visibility to Partition 4."
          },
          "05 -- Partition 5": {
            "Description": "Enable keypad access/visibility to Partition 5."
          },
          "06 -- Partition 6": {
            "Description": "Enable keypad access/visibility to Partition 6."
          },
          "07 -- Partition 7": {
            "Description": "Enable keypad access/visibility to Partition 7."
          },
          "08 -- Partition 8": {
            "Description": "Enable keypad access/visibility to Partition 8."
          }
        },
        "001 -- Function Key 1 (03)": {
          "Description": "Assign a feature to keypad’s function key #1. (03 = Stay Arm default)"
        },
        "002 -- Function Key 2 (04)": {
          "Description": "Assign a feature to keypad’s function key #2. (04 = Away Arm default)"
        },
        "003 -- Function Key 3 (06)": {
          "Description": "Assign a feature to keypad’s function key #3. (06 = Chime On/Off default)"
        },
        "004 -- Function Key 4 (22)": {
          "Description": "Assign a feature to keypad’s function key #4. (22 = Command Output #2 default, example)"
        },
        "005 -- Function Key 5 (16)": {
          "Description": "Assign a feature to keypad’s function key #5. (16 = Quick Exit default)",
          "00 -- Null Key": {
            "Description": "Function key does nothing if set to 00."
          },
          "02 -- Instant Stay Arm": {
            "Description": "Enables instant stay arming if no entry delay is desired."
          },
          "03 -- Stay Arm": {"Description": "Arms the system in Stay mode."},
          "04 -- Away Arm": {"Description": "Arms the system in Away mode."},
          "05 -- No Entry Arm": {
            "Description": "Arms in away mode with no entry delay."
          },
          "06 -- Chime On/Off": {
            "Description": "Toggle door chime status on/off."
          },
          "07 -- System Test": {
            "Description": "Initiate a system test routine (bell/siren, lights, etc.)."
          },
          "09 -- Night Arm": {
            "Description": "Arms selected interior zones as instant, bypassing others."
          },
          "12 -- Global Stay Arm": {
            "Description": "Stay arm across all active partitions."
          },
          "13 -- Global Away Arm": {
            "Description": "Away arm across all active partitions."
          },
          "14 -- Global Disarming": {
            "Description": "Disarm all partitions with a single action (requires valid code)."
          },
          "16 -- Quick Exit": {
            "Description": "Allows a brief exit in Stay mode without disarming."
          },
          "17 -- Arm Interior": {
            "Description": "Arms only interior follower zones."
          },
          "21-24 -- Command Output 1-4": {
            "Description": "Directly trigger the specified command output (e.g. door unlock relay)."
          },
          "29 -- Bypass Group Recall": {
            "Description": "Recall the last group of bypassed zones."
          },
          "31 -- Local PGM Activate": {
            "Description": "Activates a local PGM on the keypad’s 5th terminal if set as output."
          },
          "32 -- Bypass Mode": {
            "Description": "Enter bypass programming mode quickly."
          },
          "33 -- Bypass recall": {
            "Description": "Similar to 29, re-engages a previously saved bypass group."
          },
          "34 -- User Programming": {
            "Description": "Jump to user programming menu (e.g., code changes)."
          },
          "35 -- User Functions": {
            "Description": "Shortcut to [*][6] user function menu."
          },
          "37 -- Time/Date Programming": {
            "Description": "Access the time/date setting screen quickly."
          },
          "39 -- Trouble Display": {
            "Description": "Access the [*][2] trouble display menu directly."
          },
          "40 -- Alarm Memory": {
            "Description": "Access the alarm memory display quickly."
          },
          "61-68 -- Partition Select 1-8": {
            "Description": "Function key to jump directly to a specific partition selection."
          }
        },
        "011 -- Keypad I/O (Zone) (000)": {
          "Description": "Select whether the keypad’s 5th terminal is used as a zone input or local PGM output (value=0=zone default)."
        },
        "012 -- Local PGM Output Timer": {
          "Description": "If 5th terminal is used as a local PGM, define how long it stays active.",
          "Pulse Time (00 minutes)": {
            "Description": "Number of minutes the output remains active (00=disabled)."
          },
          "Pulse Time (05 sec.)": {
            "Description": "Number of seconds for a timed pulse output."
          }
        },
        "021 -- Keypad Option 1": {
          "Description": "Various keypad features (F/M/P keys, display code or X’s).",
          "1 -- [F] Key Enabled ✔": {
            "Description": "Enable/disable the [F] (Fire) function key on keypad."
          },
          "2 -- [M] Key Enabled ✔": {
            "Description": "Enable/disable the [M] (Medical) key if present on keypad."
          },
          "3 -- [P] Key Enabled ✔": {
            "Description": "Enable/disable the [P] (Panic) key on the keypad."
          },
          "4 -- Display Code or X's ✔": {
            "Description": "Toggle whether typed codes show digits or just X placeholders."
          }
        },
        "022 -- Keypad Option 2": {
          "Description": "Local clock display mode, auto alarm scrolling, power LED usage, etc.",
          "1 -- Local Clock Display ✔": {
            "Description": "If enabled, displays the time on this keypad."
          },
          "2 -- Local Clock Display 24 Hour": {
            "Description": "Switch between 12-hour and 24-hour clock format."
          },
          "3 -- Auto Alarm Scroll ✔": {
            "Description": "Keypad automatically scrolls through alarms if multiple occur."
          },
          "5 -- Power LED Option ✔": {
            "Description": "Choose if power LED is lit or used differently on this keypad."
          },
          "6 -- Power LED AC Present ✔": {
            "Description": "LED shows AC presence state. If off, it might indicate power is from battery."
          },
          "7 -- Alarms Displayed if Armed ✔": {
            "Description": "Continue showing alarms on the keypad even when the system is armed."
          },
          "8 -- Auto Scroll Open Zones ✔": {
            "Description": "Automatically scroll through any open zones on the keypad display."
          }
        },
        "023 -- Keypad Option 3": {
          "Description": "Armed LED power save, Prox usage, local display of temperature, etc.",
          "1 -- Armed LED Power Save*": {
            "Description": "Turns off armed LED after a delay to save power."
          },
          "2 -- Keypad Show Arm Mode ✔*": {
            "Description": "Indicate specifically if system is in Stay, Away, or Night mode on keypad."
          },
          "3 -- 5th Terminal is PGM Output/Zone": {
            "Description": "Select whether terminal is a zone input or local PGM (mirrors 011)."
          },
          "4 -- Prox Tag Arm/Disarm": {
            "Description": "Allows arming/disarming by swiping prox tags if keypad supports prox."
          },
          "7 -- Local Display of Temp.": {
            "Description": "Keypad can show local or external temperature sensor reading."
          },
          "8 -- Low Temperature Warning": {
            "Description": "Keypad beeps or shows trouble if local temp drops below threshold."
          }
        },
        "030 -- LCD Message (16 x 2 hex )": {
          "Description": "Custom LCD message text (in hexadecimal) for older style keypads."
        },
        "031 -- Download LCD Message Duration (000)": {
          "Description": "How long (in seconds) the downloaded message stays displayed."
        },
        "041 -- Indoor Temperature Zone Entry (000)": {
          "Description": "If using local keypad temperature, set which zone reference is used for reading."
        },
        "042 -- Outdoor Temperature Zone Entry (000)": {
          "Description": "If an outdoor sensor is monitored, link it to the keypad display here."
        },
        "101-228 -- Door Chime Sound-Zone 1- 128": {
          "Description": "Select the chime or tone used for each zone (1–128).",
          "00 -- Disabled": {"Description": "No chime for this zone."},
          "01 -- 6 beeps ✔": {
            "Description": "Zone opening triggers 6 short beeps."
          },
          "02 -- \"Bing-Bong\" Sound": {
            "Description": "Zone opening triggers a 'bing-bong' chime."
          },
          "03 -- \"Ding-Dong\" Sound": {
            "Description": "Zone opening triggers a 'ding-dong' sound."
          },
          "04 -- Alarm Tone": {
            "Description": "Zone opening triggers an alarm-like tone (short)."
          },
          "05 -- Zone Name": {
            "Description": "Keypad may announce or display the zone name (if voice/annunciation keypad)."
          }
        }
      },
      "899 Template Programming": {
        "Description": "Upload or define a template (5-digit code, phone number, account code) to quickly configure certain parameters.",
        "-- 5-Digit Template Code (5-digit decimal)": {
          "Description": "Enter a 5-digit code representing a stored template in DLS or local memory."
        },
        "-- Central Station Telephone Number (32-digit decimal)": {
          "Description": "Optionally store a default central station number in this template."
        },
        "-- Central Station Account Code (4/6-digit decimal)": {
          "Description": "Optionally store a default account code in this template."
        },
        "-- Partition Account Code (4-digit decimal)": {
          "Description": "Can define a partition’s default account code as part of the template."
        },
        "-- DLS Access Code (6-digit decimal)": {
          "Description": "Define a default DLS access code in this template."
        },
        "-- Partition Entry Delay (000-255 sec.)": {
          "Description": "Include default entry delay time in the template."
        },
        "-- Partition Exit Delay (000-255 sec.)": {
          "Description": "Include default exit delay time in the template."
        },
        "-- Installer Code": {
          "Description": "Template can store an installer code if needed (use caution!)."
        }
      }
    },
    "[900] -- [901] System Information and Testing (p: 117)": {
      "Description": "View system/module versions, walk test mode enabling, and other system info checks.",
      "900 System Information (p: 117)": {
        "Description": "Displays software/hardware version details for the main panel, keypads, expanders, and other modules.",
        "000 -- Control Panel Version": {
          "Description": "Shows the firmware version of the main control panel."
        },
        "001-016 -- Keypad 1-16 Version Info": {
          "Description": "Lists the software/firmware versions for each enrolled keypad (slots 1–16)."
        },
        "101-116 -- 8 Zone expander Module - HSM2108 1-16 Version Info": {
          "Description": "Displays version details for each HSM2108 zone expander module (up to 16)."
        },
        "201-216 -- 8 Low Current Output Module - HSM2208 1-16 Version Information": {
          "Description": "Version details for each HSM2208 output expander (slots 1–16)."
        },
        "460 -- Alternate Communicator Info": {
          "Description": "Shows firmware/hardware info for the alternate communicator (e.g., TL280, 3G2080)."
        },
        "461 -- HSM2HOST Module Version Info": {
          "Description": "Displays the wireless transceiver’s firmware version."
        },
        "481 -- HSM2955 Two-Way Audio Module Version Info": {
          "Description": "Shows the version of the HSM2955 audio verification module if present."
        },
        "501 -- 504 HSM2300 Power Supply Module 1-4 Version Info": {
          "Description": "Version information for each HSM2300 power supply module (up to 4)."
        },
        "521 -- 524 HSM2204 High Current Output Module 1-4 Version Info": {
          "Description": "Version information for each HSM2204 high-current output module (up to 4)."
        }
      },
      "901 Installer Walk Test Mode Enable/Disable (p: 118)": {
        "Description": "Activate or deactivate the walk test mode to test zones and devices without triggering a full alarm."
      }
    },
    "[902] -- [912] Module Programming (p: 118)": {
      "Description": "Configure adding/removing modules (keypads, expanders, power supplies, etc.), confirm their enrollment, run wireless placement tests, and perform soak tests.",
      "902 Add/Remove Modules (p: 118)": {
        "Description": "Menu to enroll new modules by serial number or auto-enroll, and remove modules from the system.",
        "000 -- Auto-Enroll All Modules": {
          "Description": "Panel searches the Corbus for all connected modules and enrolls them automatically.",
          "KP: ## IO: ## M:## (Auto enroll modules and shows # of keypads, # input/output modules and # other modules)": {
            "Description": "Indicates how many keypads, I/O modules, and miscellaneous modules were detected and enrolled."
          }
        },
        "001 -- Enroll Modules": {
          "Description": "Manually enroll a module by entering its 8-digit serial number.",
          "Enter serial number to enroll (8-digits)": {
            "Description": "Prompt to type in the module’s unique 8-digit ID."
          }
        },
        "002 -- Slot Assignment": {
          "Description": "Assign a discovered module to a specific slot number for supervision.",
          "Enter module serial number (8-digits) then enter slot number (2-digits)": {
            "Description": "Used to map the module’s ID to a slot if auto-enroll was not used."
          }
        },
        "003 -- Edit Module Slot Assignment": {
          "Description": "Change the slot number of an already-enrolled module.",
          "Select module and enter slot number (2-digits)": {
            "Description": "Choose the module, then specify the new slot."
          }
        },
        "101 -- Delete Keypads": {
          "Description": "Remove an enrolled keypad from the system.",
          "Select keypad and [*] to delete": {
            "Description": "Select the keypad slot, press [*] to confirm deletion."
          }
        },
        "102 -- Delete HSM2108": {
          "Description": "Removes an enrolled HSM2108 zone expander module.",
          "Select Zone expander then [*] to delete": {
            "Description": "Prompts to confirm removal of a specific zone expander."
          }
        },
        "103 -- Delete HSM2208": {
          "Description": "Removes an enrolled HSM2208 low-current output expander."
        },
        "106 -- Delete HSM2HOST": {
          "Description": "Removes the wireless transceiver module from enrollment."
        },
        "108 -- Delete HSM2955": {
          "Description": "Removes the HSM2955 audio verification module if present."
        },
        "109 -- Delete HSM2300": {
          "Description": "Removes a power supply module from enrollment."
        },
        "110 -- Delete HSM2204": {
          "Description": "Removes an enrolled high-current output module."
        }
      },
      "903 Confirm Modules (p: 119)": {
        "Description": "Check or confirm each enrolled module by activating LEDs or indicators, ensuring correct physical module matches the slot.",
        "000 -- View All Modules": {
          "Description": "Lists all enrolled modules with their serial numbers and slot assignments.",
          "Shows each module enrolled with SN serial number and Slot number": {
            "Description": "Provides a quick overview of recognized modules."
          }
        },
        "101 -- Confirm Keypads": {
          "Description": "Turns on all LEDs on the selected keypad so you can physically identify it.",
          "Select keypad and turns on all LEDs on keypad": {
            "Description": "Choose which keypad to confirm and watch its LEDs flash."
          }
        },
        "102 -- Confirm HSM2108 Zone Expander": {
          "Description": "Makes the chosen HSM2108’s LED flash to confirm its identity.",
          "Select zone expander y makes LED flash on the expander module": {
            "Description": "Approach the module to see the flashing LED and confirm correct device."
          }
        },
        "103 -- Confirm HSM2208": {
          "Description": "Flashes LED or similar method to confirm the correct HSM2208."
        },
        "106 -- Confirm HSM2HOST": {
          "Description": "Check the wireless transceiver module identity (LED or beep)."
        },
        "108 -- Confirm HSM2955": {
          "Description": "Identify the HSM2955 audio module physically."
        },
        "109 -- Confirm HSM2300": {
          "Description": "Flashes or indicates the selected HSM2300 power supply for confirmation."
        },
        "110 -- Confirm HSM2204": {
          "Description": "Confirm the correct high-current output module by flashing an indicator."
        }
      },
      "904 Wireless Placement Test (p: 120)": {
        "Description": "Allows testing of signal strength for wireless devices (zones, repeaters, sirens, keys, keypads) at their installed location.",
        "001-128 -- Placement Test Zones 1-128": {
          "Description": "Select which wireless zone to test, panel displays signal strength results.",
          "Select zone to perform test, goes testing zone and shows signal strength": {
            "Description": "See real-time readings to confirm if the device is located properly."
          }
        },
        "521-528 -- Placement Test Repeaters 1-28": {
          "Description": "Test each wireless repeater for signal reliability at its mounting location."
        },
        "551-566 -- Placement Test Sirens 1-16": {
          "Description": "Test each wireless siren for adequate signal communication to the panel."
        },
        "601-632 -- Placement Test Wireless Keys 1-32": {
          "Description": "Check signal from handheld keyfobs during press/hold activations.",
          "Select wireless key then shows Activate Device, press and hold any key to perform test and show results": {
            "Description": "Prompts the user to press a button on the key to measure and display signal quality."
          }
        },
        "701-716 -- Placement Test Wireless Keypads 1-16": {
          "Description": "Run signal strength tests on enrolled wireless keypads."
        }
      },
      "912 Soak Test (p: 121)": {
        "Description": "Monitor zone activity over a set duration to ensure reliability (e.g., detecting intermittent faults).",
        "000 -- Zone Soak Test Duration Default: 014": {
          "Description": "Set how many hours the soak test runs (default 14 hours)."
        },
        "001-128 -- Zone Soak Test -- Zones 1-128": {
          "Description": "Select which zones are under soak test monitoring. The panel logs repeated faults or alarms."
        }
      }
    },
    "[982] Battery Settings (p: 121)": {
      "Description": "Allows programming of battery charging currents and settings for the main panel, HSM2204, and HSM2300 modules.",
      "982 Battery Settings (p: 121)": {
        "Description": "Configure charge rates and other battery-related supervision options.",
        "000-- Panel Battery Settings": {
          "Description": "Adjust how the panel charges and supervises its main backup battery.",
          "01-- Panel High Charge Current (SA ✔)(FRA ✔)(UK ✔)": {
            "Description": "Enables higher battery charge current for quicker charging, often required in certain regions."
          }
        },
        "010 -- HSM2204 Battery Settings": {
          "Description": "Configure charging parameters for each HSM2204 high-current output module's backup battery.",
          "01 -- HSM2204 1 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": {
            "Description": "Module #1 (slot 1) can use higher charge current if required by local standards."
          },
          "02 -- HSM2204 2 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": {
            "Description": "Enable higher charging for module #2 if needed."
          },
          "03 -- HSM2204 3 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": {
            "Description": "Enable higher charging for module #3 if installed."
          },
          "04 -- HSM2204 4 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": {
            "Description": "Enable higher charging for module #4 if installed."
          }
        },
        "020 -- HSM2300 Battery Settings": {
          "Description": "Select how HSM2300 power supply modules handle battery charging (multiple units).",
          "01 -- HSM2300 1 Charge": {
            "Description": "Set the charge current or enable/disable battery charging for power supply #1."
          },
          "02 -- HSM2300 2 Charge": {
            "Description": "Configure battery charging for power supply #2."
          },
          "03 -- HSM2300 3 Charge": {
            "Description": "Configure battery charging for power supply #3."
          },
          "04 -- HSM2300 4 Charge": {
            "Description": "Configure battery charging for power supply #4."
          }
        }
      }
    },
    "[989] Defaults (p: 121)": {
      "Description": "Options to reset master code, lock out installer programming, or restore keypads, alternate communicator, HSM2HOST, HSM2955, or entire system to factory defaults.",
      "989 Default Master Code (p: 121)": {
        "Description": "Resets the master code to default (default code differs by model)."
      },
      "990 Installer Lockout Enable/Disable (p: 121)": {
        "Description": "Toggle an option preventing repeated [*][8] programming attempts after certain failures."
      },
      "991 Default Keypads (p: 121)": {
        "Description": "Restore keypad configurations to default settings individually or all at once.",
        "901-916 -- Default Keypad 1-16": {
          "Description": "Select a keypad slot and reset to factory defaults."
        },
        "999 -- Default all Keypads": {
          "Description": "Resets all keypads to factory defaults in one operation."
        }
      },
      "993 Default Alt Comm (p: 121)": {
        "Description": "Resets the alternate communicator (cell/IP module) programming to factory defaults."
      },
      "996 Default HSM2HOST (p: 122)": {
        "Description": "Reset the wireless transceiver module to factory defaults."
      },
      "998 Default HSM2955 (p: 122)": {
        "Description": "Reset the two-way audio verification module to factory defaults."
      },
      "999 Default System (p: 122)": {
        "Description": "Restores the entire panel (all programming) to out-of-box defaults. Use with caution."
      }
    }
  }
},

  "Troubleshooting": {
    "Description": "Common issues and solutions:\n\n1) AC Trouble: Check transformer and wiring.\n2) Battery Trouble: Verify battery connection.\n3) Bell circuit fault: Inspect siren wiring or fuses.\n\n(Placeholder—add real troubleshooting steps.)"
  },

  "Reporting Codes": {
    "Description": "Use this section to define or look up default Contact ID / SIA reporting codes.\n\n(Placeholder—enter your codes or references.)"
  },

  "Word Library": {
    "Description": "A list of predefined words or labels used in the panel’s LCD or programming.\n\n(Placeholder—add words or phrases.)"
  },

  "Power Consumption Calculator": {
    "Description": "Enter device current draw to estimate total consumption.\n\n(Placeholder—build a form or tool here.)"
  },

  "Documentation": {
    "Description": "Links or references to official manuals, installation guides, etc.\n\n(Placeholder—attach PDF links or instructions here.)"
  }
};
