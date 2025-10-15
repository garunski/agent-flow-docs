import { BaseWorkflowStep } from "../workflow-types"

export const criticalReanalysis: BaseWorkflowStep[] = [
  {

    agentType: "strategist",
    title: "Re-Analysis Decision",
    content: [
      { label: "Failure Review", content: "reviews persistent failures from Step 36" },
      { label: "Decision", content: "original analysis was incomplete" },
      { label: "Action Required", content: "need for full repository re-analysis", highlight: "Critical re-analysis decision" }
    ]
  },
  {

    agentType: "analyzer",
    title: "Full Repository Re-Analysis",
    content: [
      { label: "Re-Analysis Prediction", content: "comprehensive rescan of repo for missed dependencies" },
      { label: "Tools Suggested", content: "Code Analysis Tool" }
    ]
  },
  {

    agentType: "system",
    title: "Repository Rescan",
    content: [
      { label: "Tool Execution", content: "Code Analysis Tool rescans repository with deeper analysis parameters" },
      { label: "Discovery", content: "Previously missed dependencies, hidden integration points, and additional files requiring modification are found" }
    ]
  },
  {

    agentType: "documenter",
    title: "Corrected Documentation Retrieval",
    content: [
      { label: "Documentation Prediction", content: "need for updated documentation based on new analysis" },
      { label: "Tools Suggested", content: "Web Search / Doc Retrieval Tool" }
    ]
  },
  {

    agentType: "system",
    title: "Updated Documentation Retrieval",
    content: [
      { label: "Tool Execution", content: "Web Search / Doc Retrieval Tool fetches documentation for missed dependencies" },
      { label: "Result", content: "more accurate and complete references are obtained" }
    ]
  },
  {

    agentType: "system",
    title: "Documentation Storage and Update",
    content: [
      { label: "Tool Execution", content: "New File / Edit File Tools store enriched docs and revised analysis" },
      { label: "Result", content: "complete, corrected documentation package is now available" }
    ]
  },
  {

    agentType: "strategist",
    title: "Revised Integration Strategy",
    content: [
      { label: "Strategy Review", content: "reviews corrected analysis and documentation" },
      { label: "Plan Update", content: "updated integration plan accounting for all discovered dependencies" },
      { label: "Tools Suggested", content: "Edit File Tool" }
    ]
  },
  {

    agentType: "system",
    title: "Plan Revision",
    content: [
      { label: "Tool Execution", content: "Edit File Tool updates the plan file with comprehensive requirements" },
      { label: "Result", content: "plan now addresses all previously missed components" }
    ]
  }
]


