import Link from 'next/link'

import { Navigation } from '@/components/Navigation'

interface AgentFlowIntroProps {
  currentPath?: string
}

export function AgentFlowIntro({ currentPath = '/' }: AgentFlowIntroProps) {
  return (
    <>
      <Navigation currentPath={currentPath} />
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Agent Flow{' '}
        <span className="text-sky-300">System</span>
      </h1>
      <div className="mt-4 text-sm/6 text-gray-300">
        <p className="mb-3">
          Multi-model AI orchestration with document-aware, DAG-driven workflows.
          LLMs plan and produce structured intents while executors perform validated actions.
        </p>
        <div className="space-y-2 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <span className="text-xs">Separation of reasoning and execution</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <span className="text-xs">Minimal context per agent role</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <span className="text-xs">Full auditability and replayability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <span className="text-xs">Documentation-first approach</span>
          </div>
        </div>
      </div>
    </>
  )
}

export function AgentFlowFooter() {
  return (
    <p className="text-[0.8125rem]/6 text-gray-500">
      Multi-Model AI Orchestration System
    </p>
  )
}
