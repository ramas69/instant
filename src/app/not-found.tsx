import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const navLinks = [
  { href: '/#boutique', label: 'Boutique' },
  { href: '/#offres', label: 'Accompagnement' },
  { href: '/#rama', label: 'A propos' },
  { href: 'mailto:hello@instant-ia.com', label: 'Contactez-moi', isCta: true },
]

const footerLinks = [
  { href: '/#offres', label: 'Accompagnement' },
  { href: '/#boutique', label: 'Boutique' },
  { href: '/#rama', label: 'A propos' },
  { href: 'mailto:hello@instant-ia.com', label: 'Contact' },
]

export default function NotFound() {
  return (
    <>
      <Nav links={navLinks} />
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'var(--cream)',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          color: 'var(--green)',
          fontWeight: 400,
          marginBottom: '1rem',
        }}>
          404
        </h1>
        <p style={{
          color: 'var(--txt2)',
          fontSize: '1.2rem',
          marginBottom: '2.5rem',
          maxWidth: 450,
        }}>
          Cette page n&apos;existe pas ou a chang&eacute; d&apos;adresse.
        </p>
        <Link href="/" className="btn-hero btn-primary">
          Retour &agrave; l&apos;accueil &rarr;
        </Link>
      </section>
      <Footer links={footerLinks} />
    </>
  )
}
