import Mermaid from './Mermaid'

interface DAGNode {
  id: string
  name: string
  depends_on: string[]
  assigned_agent: string
  tool: string | null
}

interface DAGData {
  dag_id: string
  description: string
  nodes: DAGNode[]
}

interface DAGContentProps {
  dag: DAGData
}

export default function DAGContent({ dag }: DAGContentProps) {
  // Convert DAG data to Mermaid flowchart syntax
  const generateMermaidChart = (dagData: DAGData): string => {
    const { nodes } = dagData
    
    // Create node definitions
    const nodeDefinitions = nodes.map(node => {
      const agentColor = getAgentColor(node.assigned_agent)
      return `    ${node.id}["${node.name}"]:::${agentColor}`
    }).join('\n')
    
    // Create connections based on dependencies
    const connections = nodes.flatMap(node => 
      node.depends_on.map(depId => `    ${depId} --> ${node.id}`)
    ).join('\n')
    
    // Create the complete Mermaid chart
    return `graph TD
${nodeDefinitions}

${connections}

classDef analyzer fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#ffffff
classDef documenter fill:#10b981,stroke:#047857,stroke-width:2px,color:#ffffff
classDef strategist fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#ffffff
classDef system fill:#6b7280,stroke:#374151,stroke-width:2px,color:#ffffff
classDef checker fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#ffffff
classDef developer fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#ffffff
classDef test fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#ffffff`
  }

  // Get color class based on agent type
  const getAgentColor = (agentType: string): string => {
    const agentMap: { [key: string]: string } = {
      'ANALYZER': 'analyzer',
      'DOCUMENTER': 'documenter', 
      'STRATEGIST': 'strategist',
      'SYSTEM': 'system',
      'CHECKER': 'checker',
      'DEVELOPER_AGENT': 'developer',
      'TEST_AGENT': 'test'
    }
    return agentMap[agentType] || 'system'
  }

  const mermaidChart = generateMermaidChart(dag)

  return (
    <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {dag.description}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          DAG ID: {dag.dag_id}
        </p>
      </div>
      
      <div className="mermaid-container">
        <Mermaid chart={mermaidChart} />
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Legend:</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            Analyzer
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            Documenter
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            Strategist
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            Developer
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-pink-500 rounded"></div>
            Test
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-500 rounded"></div>
            System
          </span>
        </div>
      </div>
    </div>
  )
}
