// Shared workflow types
export interface WorkflowStepContent {
  label: string
  content: string
  highlight?: string
  dag?: {
    dag_id: string
    description: string
    nodes: Array<{
      id: string
      name: string
      depends_on: string[]
      assigned_agent: string
      tool: string | null
    }>
  }
}

export interface BaseWorkflowStep {
  agentType: 'analyzer' | 'documenter' | 'strategist' | 'system' | 'checker'
  title: string
  content: WorkflowStepContent[]
}

export interface WorkflowStepData extends BaseWorkflowStep {
  id: string
  date: string
}


