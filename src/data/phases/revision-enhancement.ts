import { BaseWorkflowStep } from "../workflow-types"

export const revisionAndEnhancement: BaseWorkflowStep[] = [
  // Addressing gaps and improving
  {
    agentType: "strategist",
    title: "First Plan Revision",
    content: [
      { label: "Gap Review", content: "reviews gaps detected in Step 18" },
      { label: "Update Prediction", content: "add missing tests, clarify implementation instructions based on incomplete documentation" },
      { label: "Tools Suggested", content: "Edit File Tool, New File Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Plan Update",
    content: [
      { label: "Tool Execution", content: "Edit File Tool updates the plan file" },
      { label: "Result", content: "plan now includes test requirements and clarifications for incomplete documentation" }
    ]
  },
  {
    agentType: "system",
    title: "Test Template Creation",
    content: [
      { label: "Tool Execution", content: "New File Tool adds templates for missing tests" },
      { label: "Result", content: "test scaffolding is created and passed to System" }
    ]
  },
  {
    agentType: "system",
    title: "Second Implementation",
    content: [
      { label: "Implementation Review", content: "reviews revised plan with test requirements" },
      { label: "Update Prediction", content: "code and test updates per revised plan" },
      { label: "Tools Suggested", content: "Edit File Tool, New File Tool, Execution / Run Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Code Update",
    content: [
      { label: "Tool Execution", content: "Edit File Tool updates existing code based on revised plan" },
      { label: "Result", content: "addresses some of the gaps identified" }
    ]
  },
  {
    agentType: "system",
    title: "Test File Creation",
    content: [
      { label: "Tool Execution", content: "New File Tool adds missing test files" },
      { label: "Result", content: "test coverage is expanded" }
    ]
  },
  {
    agentType: "system",
    title: "Code and Test Execution Tool Run",
    content: [
      { label: "Tool Execution", content: "Execution / Run Tool runs code and tests" },
      { label: "Result", content: "tests execute but some failures occur" }
    ]
  },
  // Documentation gap analysis and enrichment
  {
    agentType: "strategist",
    title: "Documentation Gap Analysis",
    content: [
      { label: "Gap Analysis", content: "analyzes persistent test failures from Step 27" },
      { label: "Gap Detection", content: "documentation gaps are causing implementation issues" },
      { label: "Tools Suggested", content: "Web Search / Documentation Update Tool, Edit File Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Additional Documentation Retrieval",
    content: [
      { label: "Tool Execution", content: "Web Search / Documentation Update Tool fetches additional references" },
      { label: "Result", content: "more comprehensive OAuth2 guidance is retrieved" }
    ]
  },
  {
    agentType: "system",
    title: "Plan Enrichment",
    content: [
      { label: "Tool Execution", content: "Edit File Tool updates plan and instructions with new documentation" },
      { label: "Result", content: "after multiple iterations, issues persist" }
    ]
  },
  {
    agentType: "system",
    title: "Third Implementation",
    content: [
      { label: "Implementation Review", content: "reviews enriched plan" },
      { label: "Update Prediction", content: "code updates based on improved documentation" },
      { label: "Tools Suggested", content: "Edit File Tool, Execution / Run Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Third Code Update",
    content: [
      { label: "Tool Execution", content: "Edit File Tool updates code with better documentation guidance" },
      { label: "Result", content: "implementation is refined" }
    ]
  },
  {
    agentType: "system",
    title: "Third Code Execution Tool Run",
    content: [
      { label: "Tool Execution", content: "Execution / Run Tool runs updated code" },
      { label: "Result", content: "some issues remain" }
    ]
  }
]


