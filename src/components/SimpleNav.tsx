import Link from 'next/link'

interface NavItem {
  href: string
  label: string
  current?: boolean
}

interface SimpleNavProps {
  items: NavItem[]
  className?: string
}

export function SimpleNav({ items, className = "" }: SimpleNavProps) {
  return (
    <nav className={`${className}`}>
      <ul className="flex flex-col space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                item.current
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
