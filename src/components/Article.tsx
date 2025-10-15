import Image from 'next/image'
import { ContentWrapper } from '@/components/ContentWrapper'
import { ArticleHeader } from '@/components/ArticleHeader'

export const img = function Img(props: any) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
      <Image
        alt=""
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
    </div>
  )
}

// Error state detection for workflow steps
function detectErrorState(title: string, content: any[]): {
  hasError: boolean;
  errorType: 'critical' | 'warning' | 'gap' | null;
  errorLevel: 'high' | 'medium' | 'low' | null;
} {
  const contentText = content.map(item =>
    typeof item === 'object' ? `${item.label} ${item.content}` : item
  ).join(' ').toLowerCase();

  // Critical errors - high priority issues
  if (contentText.includes('gaps detected') || contentText.includes('critical discovery')) {
    return { hasError: true, errorType: 'critical', errorLevel: 'high' };
  }

  // Gap analysis - planning issues
  if (contentText.includes('gap detection') || contentText.includes('gap analysis') ||
      contentText.includes('original analysis was incomplete')) {
    return { hasError: true, errorType: 'gap', errorLevel: 'medium' };
  }

  // Warning states - execution issues
  if (contentText.includes('failures occur') || contentText.includes('test failures') ||
      contentText.includes('issues persist') || contentText.includes('issues remain') ||
      contentText.includes('inconsistencies') || contentText.includes('documentation issues')) {
    return { hasError: true, errorType: 'warning', errorLevel: 'medium' };
  }

  return { hasError: false, errorType: null, errorLevel: null };
}

export function Article({
  id,
  date,
  children,
  agentType,
  title,
  workflowContent,
}: {
  id: string
  date: string
  children: React.ReactNode
  agentType?: 'analyzer' | 'documenter' | 'strategist' | 'system' | 'checker'
  title?: string
  workflowContent?: any[]
}) {
  // Define agent-specific colors
  const agentColors = {
    analyzer: {
      border: 'border-blue-500/50',
      bg: 'bg-blue-50/30 dark:bg-blue-950/20',
      accent: 'border-l-blue-500'
    },
    documenter: {
      border: 'border-green-500/50',
      bg: 'bg-green-50/30 dark:bg-green-950/20',
      accent: 'border-l-green-500'
    },
    strategist: {
      border: 'border-purple-500/50',
      bg: 'bg-purple-50/30 dark:bg-purple-950/20',
      accent: 'border-l-purple-500'
    },
    system: {
      border: 'border-orange-500/50',
      bg: 'bg-orange-50/30 dark:bg-orange-950/20',
      accent: 'border-l-orange-500'
    },
    checker: {
      border: 'border-red-500/50',
      bg: 'bg-red-50/30 dark:bg-red-950/20',
      accent: 'border-l-red-500'
    }
  }

  const colors = agentType ? agentColors[agentType] : {
    border: 'border-gray-200 dark:border-gray-800',
    bg: '',
    accent: 'border-l-gray-300 dark:border-l-gray-700'
  }

  // Detect error states if workflow content is provided
  const errorState = workflowContent ? detectErrorState(title || '', workflowContent) : { hasError: false, errorType: null, errorLevel: null };

  // Error state styling
  const errorStyles = errorState.hasError ? {
    critical: {
      overlay: 'relative before:absolute before:inset-0 before:bg-red-500/10 before:border before:border-red-500/30 before:rounded-lg before:pointer-events-none',
      badge: 'bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded-full',
      icon: '⚠️',
      label: 'CRITICAL'
    },
    warning: {
      overlay: 'relative before:absolute before:inset-0 before:bg-yellow-500/10 before:border before:border-yellow-500/30 before:rounded-lg before:pointer-events-none',
      badge: 'bg-yellow-500 text-white text-xs font-medium px-2.5 py-1 rounded-full',
      icon: '⚡',
      label: 'WARNING'
    },
    gap: {
      overlay: 'relative before:absolute before:inset-0 before:bg-blue-500/10 before:border before:border-blue-500/30 before:rounded-lg before:pointer-events-none',
      badge: 'bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full',
      icon: '🔍',
      label: 'GAP ANALYSIS'
    }
  }[errorState.errorType || 'warning'] : null;

  return (
    <article id={id} className="scroll-mt-16">
      <ArticleHeader id={id} date={date} />
      <ContentWrapper className="typography">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mt-0">
              {title}
            </h2>
          </div>
        )}
        <div className={`relative ${colors.border} ${colors.bg} border rounded-lg p-5 ${errorStyles?.overlay || ''}`}>
          {agentType && (
            <div className={`absolute -top-2 left-4 ${agentType === 'analyzer' ? 'bg-blue-500' : agentType === 'documenter' ? 'bg-green-500' : agentType === 'strategist' ? 'bg-purple-500' : agentType === 'system' ? 'bg-orange-500' : 'bg-red-500'} text-white text-xs font-medium px-2.5 py-1 rounded`}>
              {agentType === 'analyzer' ? 'ANALYZER' : agentType === 'documenter' ? 'DOCUMENTER' : agentType === 'strategist' ? 'STRATEGIST' : agentType === 'system' ? 'SYSTEM' : 'CHECKER'}
            </div>
          )}

          {errorState.hasError && errorStyles && (
            <div className={`absolute -top-2 right-4 ${errorStyles.badge}`}>
              <span className="mr-1">{errorStyles.icon}</span>
              {errorStyles.label}
            </div>
          )}

          <div className="space-y-3">
            {children}
          </div>
        </div>
      </ContentWrapper>
    </article>
  )
}
