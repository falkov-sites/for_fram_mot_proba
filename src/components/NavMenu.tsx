'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { cn } from '@/lib/utils'

const navItems: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Contacts', href: '/contacts' },
  { title: 'About', href: '/about' }
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className='m-2 flex gap-4 *:rounded-lg *:border *:px-2 *:py-1'>
      {navItems.map(item => (
        <Link
          href={item.href}
          key={item.title}
          className={
            pathname === item.href ? 'border border-sky-500 bg-sky-200' : 'border-transparent hover:border-sky-300'
          }>
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
