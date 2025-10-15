import { WorkflowStep } from '@/components/WorkflowStep'
import { WorkflowStepContent } from '@/data/workflow-data'

interface WorkflowContentProps {
  steps: WorkflowStepContent[]
}

export function WorkflowContent({ steps }: WorkflowContentProps) {
  return (
    <>
      {steps.map((step, index) => (
        <WorkflowStep
          key={index}
          label={step.label}
          content={step.content}
          highlight={step.highlight}
        />
      ))}
    </>
  )
}
