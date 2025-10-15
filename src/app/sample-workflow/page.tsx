import { Layout } from '@/components/Layout'
import { Article } from '@/components/Article'
import { WorkflowContent } from '@/components/WorkflowContent'
import { SampleWorkflowIntro, SampleWorkflowFooter } from '@/components/SampleWorkflowIntro'
import { ArticleHeader } from '@/components/ArticleHeader'
import { ContentWrapper } from '@/components/ContentWrapper'
import { workflowSteps } from '@/data/workflow-data'

export default function OAuth2WorkflowPage() {
  return (
    <Layout
      sidebarMain={<SampleWorkflowIntro />}
    >
      <div className="space-y-8">
        {/* User Request Section */}
        <article className="scroll-mt-16">
          <ArticleHeader id="user-request" date="User Request" />
          <ContentWrapper className="typography">
            <div className="relative border-2 border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/30 rounded-lg p-5">
              <div className="space-y-3">
                <p className="text-xl font-semibold text-sky-900 dark:text-sky-100">
                  &ldquo;Add user authentication with OAuth2&rdquo;
                </p>
              </div>
            </div>
          </ContentWrapper>
        </article>

        {workflowSteps.map((step, index) => (
          <Article
            key={step.id}
            id={step.id}
            date={`Step ${index + 1}`}
            agentType={step.agentType}
            title={step.title}
            workflowContent={step.content}
          >
            <WorkflowContent steps={step.content} />
          </Article>
        ))}
      </div>
    </Layout>
  )
}
