import Link from 'next/link'

import { Navigation } from '@/components/Navigation'

interface SampleWorkflowIntroProps {
  currentPath?: string
}

export function SampleWorkflowIntro({ currentPath = '/sample-workflow' }: SampleWorkflowIntroProps) {
  return (
    <>
      <div>
        <Navigation currentPath={currentPath} />
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Multi-Model{' '}
        <span className="text-sky-300">Agent Orchestration</span>
      </h1>
      <div className="mt-4 text-sm/6 text-gray-300">
        <p className="mb-3">
          Real-world example of the Agent Flow system: multiple AI models working together in a DAG-driven workflow to implement OAuth2 authentication. Each step shows a different agent role with minimal context, structured intents, and full auditability.
        </p>
        <ul className="space-y-1 text-gray-400 list-disc pl-4">
          <li><strong>Discovery & Planning</strong> - Analysis and strategy development</li>
          <li><strong>Infrastructure Setup</strong> - Database and system preparation</li>
          <li><strong>Initial Implementation</strong> - Core OAuth2 functionality</li>
          <li><strong>Validation Cycles</strong> - Testing and security verification</li>
          <li><strong>Revision & Enhancement</strong> - Gap analysis and improvements</li>
          <li><strong>Critical Re-Analysis</strong> - Deep system review and correction</li>
          <li><strong>Final Implementation</strong> - Complete deployment preparation</li>
          <li><strong>Deployment & Validation</strong> - Final testing and audit</li>
        </ul>
        <p className="mt-4 text-xs text-gray-500">
          Each agent operates with minimal context, produces structured intents, and maintains full auditability through the DAG execution flow.
        </p>
      </div>
    </>
  )
}

export function SampleWorkflowFooter() {
  return (
    <p className="text-[0.8125rem]/6 text-gray-500">
      Complete 52-Step Sample Implementation Workflow
    </p>
  )
}
