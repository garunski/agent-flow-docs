import { BaseWorkflowStep } from "../workflow-types"

export const validationCycles: BaseWorkflowStep[] = [
  // First validation cycle
  {
    agentType: "checker",
    title: "First Validation",
    content: [
      { label: "Validation Prediction", content: "run unit/integration tests, check security" },
      { label: "Tools Suggested", content: "Test Runner Tool, Security Scanner Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Test Runner",
    content: [
      { label: "Tool Execution", content: "Test Runner Tool executes available tests" },
      { label: "Result", content: "test results are collected and analyzed" }
    ]
  },
  {
    agentType: "system",
    title: "Security Scanner",
    content: [
      { label: "Tool Execution", content: "Security Scanner Tool checks endpoints, tokens, config compliance" },
      { label: "Gap Detection", content: "Missing automated tests for OAuth2 flows, incomplete documentation assumptions in implementation", highlight: "GAPS DETECTED" }
    ]
  },

  // Second validation cycle
  {
    agentType: "checker",
    title: "Second Validation",
    content: [
      { label: "Validation Prediction", content: "validation of updated code and new tests" },
      { label: "Tools Suggested", content: "Test Runner Tool, Security Scanner Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Second Test Execution Tool Run",
    content: [
      { label: "Tool Execution", content: "Test Runner Tool executes updated test suite" },
      { label: "Gap Detection", content: "Minor test failures due to persistent documentation issues", highlight: "GAPS DETECTED" }
    ]
  },
  {
    agentType: "system",
    title: "Second Security Scan",
    content: [
      { label: "Tool Execution", content: "Security Scanner Tool performs security checks" },
      { label: "Result", content: "security is adequate but documentation inconsistencies affect implementation clarity" }
    ]
  },

  // Third validation cycle
  {
    agentType: "checker",
    title: "Third Validation",
    content: [
      { label: "Validation Prediction", content: "comprehensive validation" },
      { label: "Tools Suggested", content: "Test Runner Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Third Test Execution Tool Run",
    content: [
      { label: "Tool Execution", content: "Test Runner Tool executes tests" },
      { label: "Critical Discovery", content: "Tests reveal missed dependencies and integration points not found in original analysis" }
    ]
  }
]


