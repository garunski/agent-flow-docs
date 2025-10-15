// Complete OAuth2 Implementation Workflow - 52 steps of AI agent collaboration
export interface WorkflowStepContent {
  label: string
  content: string
  highlight?: string
}

export interface WorkflowStepData {
  id: string
  date: string
  agentType: 'analyzer' | 'documenter' | 'strategist' | 'system' | 'checker'
  title: string
  content: WorkflowStepContent[]
}

export const workflowSteps: WorkflowStepData[] = [
  {
    id: "sample-step1",
    date: "Step 1",
    agentType: "analyzer",
    title: "Codebase Analysis",
    content: [
      {
        label: "Impact Analysis",
        content: "login endpoints, session management, token handling"
      },
      {
        label: "Recommendation",
        content: "for repository scanning",
        highlight: "Code Analysis Tool"
      }
    ]
  },
  {
    id: "sample-step2",
    date: "Step 2",
    agentType: "system",
    title: "Code Analysis",
    content: [
      {
        label: "Tool Execution",
        content: "Code Analysis Tool scans the repository based on agent prediction"
      },
      {
        label: "Output",
        content: "structured map of files, classes, and functions to modify"
      },
      {
        label: "Storage",
        content: "analysis context is stored for feedback loops"
      }
    ]
  },
  {
    id: "sample-step3",
    date: "Step 3",
    agentType: "documenter",
    title: "Documentation Gathering",
    content: [
      {
        label: "Prediction",
        content: "necessary documentation and external references"
      },
      {
        label: "Tools Suggested",
        content: "Web Search / Documentation Retrieval Tool, File Creation Tool"
      }
    ]
  },
  {
    id: "sample-step4",
    date: "Step 4",
    agentType: "system",
    title: "Documentation Retrieval",
    content: [
      {
        label: "Tool Execution",
        content: "Web Search / Documentation Retrieval Tool retrieves specs, integration examples, and client references"
      },
      {
        label: "Output",
        content: "curated guides and references"
      }
    ]
  },
  {
    id: "sample-step5",
    date: "Step 5",
    agentType: "system",
    title: "Documentation Storage",
    content: [
      {
        label: "Tool Execution",
        content: "File Creation Tool stores curated docs in a project folder"
      },
      {
        label: "Result",
        content: "documentation is now available for subsequent agents"
      }
    ]
  },
  {
    id: "sample-step6",
    date: "Step 6",
    agentType: "strategist",
    title: "Integration Strategy",
    content: [
      {
        label: "Strategy Prediction",
        content: "OAuth2 integration plan: Authorization Code flow with JWT, DB schema changes, endpoint modifications, implementation instructions"
      },
      {
        label: "Tools Suggested",
        content: "New File Tool to create a plan file, Update File Tool to update documentation"
      }
    ]
  },
  {
    id: "sample-step7",
    date: "Step 7",
    agentType: "system",
    title: "Plan File Creation",
    content: [
      {
        label: "Tool Execution",
        content: "New File Tool generates the structured integration plan file"
      },
      {
        label: "Result",
        content: "plan document is created and stored"
      }
    ]
  },
  {
    id: "sample-step8",
    date: "Step 8",
    agentType: "system",
    title: "Documentation Update",
    content: [
      {
        label: "Tool Execution",
        content: "Update File Tool updates project documentation with instructions"
      },
      {
        label: "Result",
        content: "plan is now ready to be passed to System"
      }
    ]
  },
  {
    id: "sample-step9",
    date: "Step 9",
    agentType: "strategist",
    title: "Database Schema Design",
    content: [
      {
        label: "Schema Prediction",
        content: "necessary DB schema changes (token storage, updated user table)"
      },
      {
        label: "Tools Suggested",
        content: "DB Migration Tool, Migration Logging Tool"
      }
    ]
  },
  {
    id: "sample-step10",
    date: "Step 10",
    agentType: "system",
    title: "Database Migration",
    content: [
      {
        label: "Tool Execution",
        content: "DB Migration Tool applies schema changes"
      },
      {
        label: "Result",
        content: "database schema is updated with new tables and columns"
      }
    ]
  },
  {
    id: "sample-step11",
    date: "Step 11",
    agentType: "system",
    title: "Migration Logging",
    content: [
      {
        label: "Tool Execution",
        content: "Migration Logging Tool records the applied migrations"
      },
      {
        label: "Output",
        content: "updated DB schema with logs"
      }
    ]
  },
  {
    id: "sample-step12",
    date: "Step 12",
    agentType: "system",
    title: "Code Implementation",
    content: [
      {
        label: "Implementation Prediction",
        content: "code and configuration updates for OAuth2"
      },
      {
        label: "Tools Suggested",
        content: "Edit File Tool, New File Tool, Execution / Run Tool"
      }
    ]
  },
  {
    id: "sample-step13",
    date: "Step 13",
    agentType: "system",
    title: "Code File Editing",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool modifies existing code files"
      },
      {
        label: "Result",
        content: "OAuth2 logic is added to existing endpoints and services"
      }
    ]
  },
  {
    id: "sample-step14",
    date: "Step 14",
    agentType: "system",
    title: "New Module Creation",
    content: [
      {
        label: "Tool Execution",
        content: "New File Tool creates new modules/configs"
      },
      {
        label: "Result",
        content: "new OAuth2-specific files are generated"
      }
    ]
  },
  {
    id: "sample-step15",
    date: "Step 15",
    agentType: "system",
    title: "Syntax Verification",
    content: [
      {
        label: "Tool Execution",
        content: "Execution / Run Tool runs snippets for syntax verification"
      },
      {
        label: "Result",
        content: "code appears functional and syntactically correct"
      }
    ]
  },
  {
    id: "sample-step16",
    date: "Step 16",
    agentType: "checker",
    title: "First Validation",
    content: [
      {
        label: "Validation Prediction",
        content: "run unit/integration tests, check security"
      },
      {
        label: "Tools Suggested",
        content: "Test Runner Tool, Security Scanner Tool"
      }
    ]
  },
  {
    id: "sample-step17",
    date: "Step 17",
    agentType: "system",
    title: "Test Runner",
    content: [
      {
        label: "Tool Execution",
        content: "Test Runner Tool executes available tests"
      },
      {
        label: "Result",
        content: "test results are collected and analyzed"
      }
    ]
  },
  {
    id: "sample-step18",
    date: "Step 18",
    agentType: "system",
    title: "Security Scanner",
    content: [
      {
        label: "Tool Execution",
        content: "Security Scanner Tool checks endpoints, tokens, config compliance"
      },
      {
        label: "Gap Detection",
        content: "Missing automated tests for OAuth2 flows, incomplete documentation assumptions in implementation",
        highlight: "GAPS DETECTED"
      }
    ]
  },
  {
    id: "sample-step19",
    date: "Step 19",
    agentType: "strategist",
    title: "First Plan Revision",
    content: [
      {
        label: "Gap Review",
        content: "reviews gaps detected in Step 18"
      },
      {
        label: "Update Prediction",
        content: "add missing tests, clarify implementation instructions based on incomplete documentation"
      },
      {
        label: "Tools Suggested",
        content: "Edit File Tool, New File Tool"
      }
    ]
  },
  {
    id: "sample-step20",
    date: "Step 20",
    agentType: "system",
    title: "Plan Update",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool updates the plan file"
      },
      {
        label: "Result",
        content: "plan now includes test requirements and clarifications for incomplete documentation"
      }
    ]
  },
  {
    id: "sample-step21",
    date: "Step 21",
    agentType: "system",
    title: "Test Template Creation",
    content: [
      {
        label: "Tool Execution",
        content: "New File Tool adds templates for missing tests"
      },
      {
        label: "Result",
        content: "test scaffolding is created and passed to System"
      }
    ]
  },
  {
    id: "sample-step22",
    date: "Step 22",
    agentType: "system",
    title: "Second Implementation",
    content: [
      {
        label: "Implementation Review",
        content: "reviews revised plan with test requirements"
      },
      {
        label: "Update Prediction",
        content: "code and test updates per revised plan"
      },
      {
        label: "Tools Suggested",
        content: "Edit File Tool, New File Tool, Execution / Run Tool"
      }
    ]
  },
  {
    id: "sample-step23",
    date: "Step 23",
    agentType: "system",
    title: "Code Update",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool updates existing code based on revised plan"
      },
      {
        label: "Result",
        content: "addresses some of the gaps identified"
      }
    ]
  },
  {
    id: "sample-step24",
    date: "Step 24",
    agentType: "system",
    title: "Test File Creation",
    content: [
      {
        label: "Tool Execution",
        content: "New File Tool adds missing test files"
      },
      {
        label: "Result",
        content: "test coverage is expanded"
      }
    ]
  },
  {
    id: "sample-step25",
    date: "Step 25",
    agentType: "system",
    title: "Code and Test Execution Tool Run",
    content: [
      {
        label: "Tool Execution",
        content: "Execution / Run Tool runs code and tests"
      },
      {
        label: "Result",
        content: "tests execute but some failures occur"
      }
    ]
  },
  {
    id: "sample-step26",
    date: "Step 26",
    agentType: "checker",
    title: "Second Validation",
    content: [
      {
        label: "Validation Prediction",
        content: "validation of updated code and new tests"
      },
      {
        label: "Tools Suggested",
        content: "Test Runner Tool, Security Scanner Tool"
      }
    ]
  },
  {
    id: "sample-step27",
    date: "Step 27",
    agentType: "system",
    title: "Second Test Execution Tool Run",
    content: [
      {
        label: "Tool Execution",
        content: "Test Runner Tool executes updated test suite"
      },
      {
        label: "Gap Detection",
        content: "Minor test failures due to persistent documentation issues",
        highlight: "GAPS DETECTED"
      }
    ]
  },
  {
    id: "sample-step28",
    date: "Step 28",
    agentType: "system",
    title: "Second Security Scan",
    content: [
      {
        label: "Tool Execution",
        content: "Security Scanner Tool performs security checks"
      },
      {
        label: "Result",
        content: "security is adequate but documentation inconsistencies affect implementation clarity"
      }
    ]
  },
  {
    id: "sample-step29",
    date: "Step 29",
    agentType: "strategist",
    title: "Documentation Gap Analysis",
    content: [
      {
        label: "Gap Analysis",
        content: "analyzes persistent test failures from Step 27"
      },
      {
        label: "Gap Detection",
        content: "documentation gaps are causing implementation issues"
      },
      {
        label: "Tools Suggested",
        content: "Web Search / Documentation Update Tool, Edit File Tool"
      }
    ]
  },
  {
    id: "sample-step30",
    date: "Step 30",
    agentType: "system",
    title: "Additional Documentation Retrieval",
    content: [
      {
        label: "Tool Execution",
        content: "Web Search / Documentation Update Tool fetches additional references"
      },
      {
        label: "Result",
        content: "more comprehensive OAuth2 guidance is retrieved"
      }
    ]
  },
  {
    id: "sample-step31",
    date: "Step 31",
    agentType: "system",
    title: "Plan Enrichment",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool updates plan and instructions with new documentation"
      },
      {
        label: "Result",
        content: "after multiple iterations, issues persist"
      }
    ]
  },
  {
    id: "sample-step32",
    date: "Step 32",
    agentType: "system",
    title: "Third Implementation",
    content: [
      {
        label: "Implementation Review",
        content: "reviews enriched plan"
      },
      {
        label: "Update Prediction",
        content: "code updates based on improved documentation"
      },
      {
        label: "Tools Suggested",
        content: "Edit File Tool, Execution / Run Tool"
      }
    ]
  },
  {
    id: "sample-step33",
    date: "Step 33",
    agentType: "system",
    title: "Third Code Update",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool updates code with better documentation guidance"
      },
      {
        label: "Result",
        content: "implementation is refined"
      }
    ]
  },
  {
    id: "sample-step34",
    date: "Step 34",
    agentType: "system",
    title: "Third Code Execution Tool Run",
    content: [
      {
        label: "Tool Execution",
        content: "Execution / Run Tool runs updated code"
      },
      {
        label: "Result",
        content: "some issues remain"
      }
    ]
  },
  {
    id: "sample-step35",
    date: "Step 35",
    agentType: "checker",
    title: "Third Validation",
    content: [
      {
        label: "Validation Prediction",
        content: "comprehensive validation"
      },
      {
        label: "Tools Suggested",
        content: "Test Runner Tool"
      }
    ]
  },
  {
    id: "sample-step36",
    date: "Step 36",
    agentType: "system",
    title: "Third Test Execution Tool Run",
    content: [
      {
        label: "Tool Execution",
        content: "Test Runner Tool executes tests"
      },
      {
        label: "Critical Discovery",
        content: "Tests reveal missed dependencies and integration points not found in original analysis"
      }
    ]
  },
  {
    id: "sample-step37",
    date: "Step 37",
    agentType: "strategist",
    title: "Re-Analysis Decision",
    content: [
      {
        label: "Failure Review",
        content: "reviews persistent failures from Step 36"
      },
      {
        label: "Decision",
        content: "original analysis was incomplete"
      },
      {
        label: "Action Required",
        content: "need for full repository re-analysis",
        highlight: "Critical re-analysis decision"
      }
    ]
  },
  {
    id: "sample-step38",
    date: "Step 38",
    agentType: "analyzer",
    title: "Full Repository Re-Analysis",
    content: [
      {
        label: "Re-Analysis Prediction",
        content: "comprehensive rescan of repo for missed dependencies"
      },
      {
        label: "Tools Suggested",
        content: "Code Analysis Tool"
      }
    ]
  },
  {
    id: "sample-step39",
    date: "Step 39",
    agentType: "system",
    title: "Repository Rescan",
    content: [
      {
        label: "Tool Execution",
        content: "Code Analysis Tool rescans repository with deeper analysis parameters"
      },
      {
        label: "Discovery",
        content: "Previously missed dependencies, hidden integration points, and additional files requiring modification are found"
      }
    ]
  },
  {
    id: "sample-step40",
    date: "Step 40",
    agentType: "documenter",
    title: "Corrected Documentation Retrieval",
    content: [
      {
        label: "Documentation Prediction",
        content: "need for updated documentation based on new analysis"
      },
      {
        label: "Tools Suggested",
        content: "Web Search / Doc Retrieval Tool"
      }
    ]
  },
  {
    id: "sample-step41",
    date: "Step 41",
    agentType: "system",
    title: "Updated Documentation Retrieval",
    content: [
      {
        label: "Tool Execution",
        content: "Web Search / Doc Retrieval Tool fetches documentation for missed dependencies"
      },
      {
        label: "Result",
        content: "more accurate and complete references are obtained"
      }
    ]
  },
  {
    id: "sample-step42",
    date: "Step 42",
    agentType: "system",
    title: "Documentation Storage and Update",
    content: [
      {
        label: "Tool Execution",
        content: "New File / Edit File Tools store enriched docs and revised analysis"
      },
      {
        label: "Result",
        content: "complete, corrected documentation package is now available"
      }
    ]
  },
  {
    id: "sample-step43",
    date: "Step 43",
    agentType: "strategist",
    title: "Revised Integration Strategy",
    content: [
      {
        label: "Strategy Review",
        content: "reviews corrected analysis and documentation"
      },
      {
        label: "Plan Update",
        content: "updated integration plan accounting for all discovered dependencies"
      },
      {
        label: "Tools Suggested",
        content: "Edit File Tool"
      }
    ]
  },
  {
    id: "sample-step44",
    date: "Step 44",
    agentType: "system",
    title: "Plan Revision",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool updates the plan file with comprehensive requirements"
      },
      {
        label: "Result",
        content: "plan now addresses all previously missed components"
      }
    ]
  },
  {
    id: "sample-step45",
    date: "Step 45",
    agentType: "system",
    title: "Final Implementation",
    content: [
      {
        label: "Final Review",
        content: "reviews complete, corrected plan"
      },
      {
        label: "Final Prediction",
        content: "comprehensive code, config, and test updates"
      },
      {
        label: "Tools Suggested",
        content: "Edit File Tool, New File Tool, Execution / Run Tool"
      }
    ]
  },
  {
    id: "sample-step46",
    date: "Step 46",
    agentType: "system",
    title: "Final Code Updates",
    content: [
      {
        label: "Tool Execution",
        content: "Edit File Tool updates all code files with corrections"
      },
      {
        label: "Result",
        content: "all identified issues are addressed"
      }
    ]
  },
  {
    id: "sample-step47",
    date: "Step 47",
    agentType: "system",
    title: "Final Module Completion",
    content: [
      {
        label: "Tool Execution",
        content: "New File Tool adds all remaining missing modules and tests"
      },
      {
        label: "Result",
        content: "complete implementation is now in place"
      }
    ]
  },
  {
    id: "sample-step48",
    date: "Step 48",
    agentType: "system",
    title: "Final Code and Test Execution Tool Run",
    content: [
      {
        label: "Tool Execution",
        content: "Execution / Run Tool executes complete code and test suite"
      },
      {
        label: "Result",
        content: "all code runs successfully"
      }
    ]
  },
  {
    id: "sample-step49",
    date: "Step 49",
    agentType: "checker",
    title: "Final Verification",
    content: [
      {
        label: "Final Validation",
        content: "comprehensive final validation"
      },
      {
        label: "Tools Suggested",
        content: "Test Runner Tool, Security Scanner Tool, Audit / Reporting Tool"
      }
    ]
  },
  {
    id: "sample-step50",
    date: "Step 50",
    agentType: "system",
    title: "Comprehensive Test Execution Tool Run",
    content: [
      {
        label: "Tool Execution",
        content: "Test Runner Tool executes complete test suite"
      },
      {
        label: "Result",
        content: "all tests pass"
      }
    ]
  },
  {
    id: "sample-step51",
    date: "Step 51",
    agentType: "system",
    title: "Final Security Scan",
    content: [
      {
        label: "Tool Execution",
        content: "Security Scanner Tool performs comprehensive security audit"
      },
      {
        label: "Result",
        content: "all security requirements are met"
      }
    ]
  },
  {
    id: "sample-step52",
    date: "Step 52",
    agentType: "system",
    title: "Audit Report Generation",
    content: [
      {
        label: "Tool Execution",
        content: "Audit / Reporting Tool generates final audit report"
      },
      {
        label: "Final Output",
        content: "deployable, fully compliant OAuth2 authentication module",
        highlight: "✅ Complete"
      }
    ]
  }
]
