import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merci pour ton achat ! | Instant IA',
  description: 'Telecharge ton ebook Agents IA et accede a tous tes bonus.',
  robots: { index: false, follow: false },
}

export default function MerciLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
