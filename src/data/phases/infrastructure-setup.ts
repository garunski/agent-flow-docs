import { BaseWorkflowStep } from "../workflow-types"

export const infrastructureSetup: BaseWorkflowStep[] = [
  {
    agentType: "strategist",
    title: "Database Schema Design",
    content: [
      { label: "Schema Prediction", content: "necessary DB schema changes (token storage, updated user table)" },
      { label: "Tools Suggested", content: "DB Migration Tool, Migration Logging Tool" }
    ]
  },
  {
    agentType: "system",
    title: "Database Migration",
    content: [
      { label: "Tool Execution", content: "DB Migration Tool applies schema changes" },
      { label: "Result", content: "database schema is updated with new tables and columns" }
    ]
  },
  {
    agentType: "system",
    title: "Migration Logging",
    content: [
      { label: "Tool Execution", content: "Migration Logging Tool records the applied migrations" },
      { label: "Output", content: "updated DB schema with logs" }
    ]
  },
  {
    agentType: "system",
    title: "Code Implementation",
    content: [
      { label: "Implementation Prediction", content: "code and configuration updates for OAuth2" },
      { label: "Tools Suggested", content: "Edit File Tool, New File Tool, Execution / Run Tool" }
    ]
  }
]


