import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merci pour ton achat ! — Kit IA du Solopreneur | Instant IA',
  description: 'Telecharge ton Kit IA du Solopreneur et commence a utiliser tes 50 mega-prompts.',
  robots: { index: false, follow: false },
}

export default function MerciKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
