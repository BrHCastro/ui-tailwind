'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends LinkProps {
  children: string
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const activePath = usePathname()

  return (
    <Link
      data-active={activePath === props.href}
      className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors data-[active=true]:border-cyan-400"
      {...props}
    >
      {children}
    </Link>
  )
}
