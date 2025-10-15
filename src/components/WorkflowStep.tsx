interface WorkflowStepProps {
  label: string
  content: string | React.ReactNode
  highlight?: string
  className?: string
}

export function WorkflowStep({ label, content, highlight, className = "" }: WorkflowStepProps) {
  // Skip highlight if it's redundant with the label
  const isRedundant = label.toLowerCase().includes(highlight?.toLowerCase() || '')

  return (
    <div className={`text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}>
      <strong className="text-gray-900 dark:text-white">{label}:</strong>{' '}
      {highlight && !isRedundant ? (
        <>
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
            {highlight}
          </span>
          {' '}
        </>
      ) : null}
      {content}
    </div>
  )
}
