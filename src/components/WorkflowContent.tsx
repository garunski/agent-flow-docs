import { WorkflowStep } from '@/components/WorkflowStep'
import DAGContent from '@/components/DAGContent'
import { WorkflowStepContent } from '@/data/workflow-types'

interface WorkflowContentProps {
  steps: WorkflowStepContent[]
}

export function WorkflowContent({ steps }: WorkflowContentProps) {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index}>
          <WorkflowStep
            label={step.label}
            content={step.content}
            highlight={step.highlight}
          />
          {step.dag && <DAGContent dag={step.dag} />}
        </div>
      ))}
    </>
  )
}
