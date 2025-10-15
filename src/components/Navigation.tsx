import { SimpleNav } from '@/components/SimpleNav'

interface NavigationProps {
  currentPath?: string
}

export function Navigation({ currentPath = '/' }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/sample-workflow', label: 'Sample Workflow' },
  ]

  // Mark the current page as active
  const itemsWithCurrent = navItems.map(item => ({
    ...item,
    current: item.href === currentPath
  }))

  return <SimpleNav items={itemsWithCurrent} />
}
