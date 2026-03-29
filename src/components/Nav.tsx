import Link from 'next/link'
import MobileMenu from './MobileMenu'

type NavLink = { href: string; label: string; isCta?: boolean }

export default function Nav({ variant = 'default', links }: { variant?: 'homepage' | 'default'; links: NavLink[] }) {
  const isHomepage = variant === 'homepage'
  return (
    <nav id={isHomepage ? 'nav' : undefined} className={isHomepage ? 'nav-homepage' : undefined}>
      <div className="nav-bar">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-circle">
            <svg viewBox="0 0 24 24" fill="none">
              <path className="logo-bolt" d="M13 2L4.5 13.5H11.5L10.5 22L19.5 10.5H12.5L13 2Z" fill={isHomepage ? '#fff' : '#E8C547'} />
            </svg>
          </span>
          instant<b>.ia</b>
        </Link>
        <div className="nav-links" id="navLinks">
          {links.map((link) =>
            link.isCta ? (
              <a key={link.href} href={link.href} className="nav-cta">{link.label}</a>
            ) : link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
              <a key={link.href} href={link.href}>{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            )
          )}
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}
