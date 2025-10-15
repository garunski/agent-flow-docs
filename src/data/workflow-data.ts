// Complete OAuth2 Implementation Workflow - split into phases
import { BaseWorkflowStep, WorkflowStepData } from "./workflow-types"
import { discoveryAndPlanning } from "./phases/discovery-planning"
import { infrastructureSetup } from "./phases/infrastructure-setup"
import { initialImplementation } from "./phases/initial-implementation"
import { validationCycles } from "./phases/validation-cycles"
import { revisionAndEnhancement } from "./phases/revision-enhancement"
import { criticalReanalysis } from "./phases/critical-reanalysis"
import { finalImplementation } from "./phases/final-implementation"
import { deploymentAndValidation } from "./phases/deployment-validation"

// Function to generate numbered steps with unique IDs from base arrays
function generateNumberedSteps(baseSteps: BaseWorkflowStep[]): WorkflowStepData[] {
  return baseSteps.map((step, index) => ({
    ...step,
    id: `step-${index + 1}`,
    date: `Step ${index + 1}`
  }))
}

// Combine all phase arrays and generate numbered steps
const allBaseSteps: BaseWorkflowStep[] = [
  ...discoveryAndPlanning,
  ...infrastructureSetup,
  ...initialImplementation,
  ...validationCycles,
  ...revisionAndEnhancement,
  ...criticalReanalysis,
  ...finalImplementation,
  ...deploymentAndValidation
]

export const workflowSteps: WorkflowStepData[] = generateNumberedSteps(allBaseSteps)


