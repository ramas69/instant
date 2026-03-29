import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['500', '600', '700'],
  display: 'swap',
})

// Instrument Serif n'est pas disponible dans next/font/google avec italic,
// on utilise Google Fonts CSS directement via le layout
export const metadata: Metadata = {
  metadataBase: new URL('https://instant-ia.com'),
  title: {
    template: '%s | Instant IA',
    default: 'Instant IA — Formations, Ateliers & Consulting IA',
  },
  description:
    "Transforme ton business avec l'IA. Formations, ateliers live, ebooks et accompagnement sur-mesure par Rama — experte IA, formatrice et cofondatrice.",
  openGraph: {
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Instant IA',
  },
  icons: {
    icon: '/favicon-instant-ia.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <style>{`
          :root {
            --font-serif: 'Instrument Serif', serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
