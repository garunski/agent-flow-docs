import { BaseWorkflowStep } from "../workflow-types"

export const discoveryAndPlanning: BaseWorkflowStep[] = [
  {
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
      },
      {
        label: "Generated DAG",
        content: "STRATEGIST generates a directed acyclic graph (DAG) representing the execution plan for OAuth2 integration",
        dag: {
          dag_id: "oauth2_initial_plan",
          description: "STRATEGIST's first naive DAG for adding OAuth2 authentication",
          nodes: [
            {
              id: "A",
              name: "Analyze Authentication Requirements",
              depends_on: [],
              assigned_agent: "ANALYZER",
              tool: null
            },
            {
              id: "B",
              name: "Select OAuth2 Provider & Library",
              depends_on: ["A"],
              assigned_agent: "STRATEGIST",
              tool: null
            },
            {
              id: "C",
              name: "Integrate OAuth2 Library into Backend",
              depends_on: ["B"],
              assigned_agent: "DEVELOPER_AGENT",
              tool: null
            },
            {
              id: "D",
              name: "Update User Model & Database",
              depends_on: ["B"],
              assigned_agent: "DEVELOPER_AGENT",
              tool: null
            },
            {
              id: "E",
              name: "Add Login & Logout Endpoints",
              depends_on: ["C", "D"],
              assigned_agent: "DEVELOPER_AGENT",
              tool: null
            },
            {
              id: "F",
              name: "Implement Frontend Login Flow",
              depends_on: ["B"],
              assigned_agent: "DEVELOPER_AGENT",
              tool: null
            },
            {
              id: "G",
              name: "Test Authentication Functionality",
              depends_on: ["E", "F"],
              assigned_agent: "TEST_AGENT",
              tool: "test_runner"
            }
          ]
        }
      }
    ]
  },
  {
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
  }
]


