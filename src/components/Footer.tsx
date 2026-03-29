import Link from 'next/link'

type FooterLink = { href: string; label: string; external?: boolean }

export default function Footer({ links }: { links: FooterLink[] }) {
  return (
    <footer>
      <div className="footer-inner">
        <Link href="/" className="footer-logo">
          <span className="footer-logo-circle">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M13 2L4.5 13.5H11.5L10.5 22L19.5 10.5H12.5L13 2Z" fill="#E8C547" />
            </svg>
          </span>
          instant<b>.ia</b>
        </Link>
        <div className="footer-links">
          {links.map((link) =>
            link.external || link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
              <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            )
          )}
        </div>
        <div className="footer-copy">&copy; 2026 Instant IA &mdash; Rama.S &mdash; Tous droits r&eacute;serv&eacute;s</div>
      </div>
    </footer>
  )
}
