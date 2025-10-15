import { BaseWorkflowStep } from "../workflow-types"

export const initialImplementation: BaseWorkflowStep[] = [
  {
    agentType: "system",
    title: "Code File Editing",
    content: [
      { label: "Tool Execution", content: "Edit File Tool modifies existing code files" },
      { label: "Result", content: "OAuth2 logic is added to existing endpoints and services" }
    ]
  },
  {
    agentType: "system",
    title: "New Module Creation",
    content: [
      { label: "Tool Execution", content: "New File Tool creates new modules/configs" },
      { label: "Result", content: "new OAuth2-specific files are generated" }
    ]
  },
  {
    agentType: "system",
    title: "Syntax Verification",
    content: [
      { label: "Tool Execution", content: "Execution / Run Tool runs snippets for syntax verification" },
      { label: "Result", content: "code appears functional and syntactically correct" }
    ]
  }
]


