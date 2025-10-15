import Link from 'next/link'

import { ContentWrapper } from '@/components/ContentWrapper'

export function ArticleHeader({ id, date }: { id: string; date: string }) {
  return (
    <header className="relative mb-10 xl:mb-0">
      <div className="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-2 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:left-0 lg:min-w-lg xl:h-8">
        <Link href={`#${id}`} className="inline-flex">
          <span className="hidden lg:pointer-events-auto lg:block lg:text-sm lg:font-medium lg:text-gray-300 lg:px-3 lg:py-2 lg:rounded-md lg:bg-gray-800/30 lg:transition-colors lg:hover:text-white lg:hover:bg-gray-800/50">
            {date}
          </span>
        </Link>
        <div className="h-0.25 w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
      </div>
      <ContentWrapper>
        <div className="flex">
          <Link href={`#${id}`} className="inline-flex">
            <span className="text-sm font-semibold text-gray-900 xl:hidden dark:text-white">
              {date}
            </span>
          </Link>
        </div>
      </ContentWrapper>
    </header>
  )
}
