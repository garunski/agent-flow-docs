import { Layout } from '@/components/Layout'
import { Article } from '@/components/Article'
import { AgentFlowIntro } from '@/components/AgentFlowIntro'

export default function HomePage() {
  return (
    <Layout
      sidebarMain={<AgentFlowIntro currentPath="/" />}
    >
      <Article
        id="agent-flow-overview"
        date="System Overview"
        agentType="system"
        title="Agent Flow: Multi-Model Orchestration System"
      >
        <div className="space-y-6">
          <p>
            Agent Flow is a document-aware, DAG-driven orchestration system where LLMs plan and produce structured intents, 
            while separate executors perform validated actions. This approach separates reasoning from execution, 
            ensuring safety, minimal context, and full auditability.
          </p>
          
          <h3 className="text-lg font-semibold">Core Principles</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Separation of concerns:</strong> LLMs generate plans and intents; executors act under policy</li>
            <li><strong>Minimal context:</strong> Each step runs with just-enough inputs and document snippets</li>
            <li><strong>Auditability:</strong> DAG, intents, validations, and effects are replayable and logged</li>
            <li><strong>Documentation-first:</strong> Structured docs ground reasoning and decision-making</li>
            <li><strong>Safety:</strong> Validation gates for schema, semantics, dependencies, resources, and risk</li>
          </ul>

          <h3 className="text-lg font-semibold">Agent Roles</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Planner:</strong> Produces the DAG structure and dependencies
            </div>
            <div>
              <strong>Analyzer:</strong> Codebase analysis and impact assessment
            </div>
            <div>
              <strong>Documenter:</strong> Gathers and synthesizes documentation
            </div>
            <div>
              <strong>Strategist:</strong> Solution design and architecture decisions
            </div>
            <div>
              <strong>Validator:</strong> Enforces schema, safety policy, and compliance
            </div>
            <div>
              <strong>Executor:</strong> Applies approved intents with full logging
            </div>
            <div>
              <strong>Tester:</strong> Generates and runs tests, routes failures back
            </div>
            <div>
              <strong>System:</strong> Infrastructure and configuration management
            </div>
          </div>

          <div className="mt-8 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-200 dark:border-sky-800">
            <p className="text-sm text-sky-800 dark:text-sky-200">
              <strong>Live Example:</strong> The{' '}
              <a href="/sample-workflow" className="underline hover:no-underline">
                Sample Workflow
              </a>{' '}
              demonstrates this system in action with 52 coordinated steps across 8 phases, 
              showing how multiple AI agents collaborate to implement complex features.
            </p>
          </div>
        </div>
      </Article>
    </Layout>
  )
}
