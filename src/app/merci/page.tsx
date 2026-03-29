'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Confetti from '@/components/Confetti'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './page.module.css'

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

export default function MerciPage() {
  const [copied, setCopied] = useState(false)

  function copyNotionLink() {
    const link = 'https://notion.so/instant-ia/bonus-templates'
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }
  return (
    <>
      <Confetti />
      <ScrollReveal />
      <Nav links={navLinks} />

      {/* ══ HERO ══ */}
      <section className={styles.merciHero}>
        <div className={styles.merciCheck}>
          <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
            <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className={styles.merciTitle}>Merci pour ton achat !</h1>
        <p className={styles.merciDesc}>
          Tout est pret. Telecharge ton ebook ci-dessous et accede a tes bonus.
          Tu vas pouvoir deployer tes premiers agents IA des aujourd&apos;hui.
        </p>
      </section>

      {/* ══ DOWNLOADS ══ */}
      <section className={styles.downloads}>
        <h2 className={styles.sectionTitle}>Tes ressources</h2>

        <div className={styles.dlGrid}>
          {/* Ebook PDF */}
          <div className={styles.dlCard}>
            <div className={`${styles.dlIcon} ${styles.dlIconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#064E3B" strokeWidth="1.5" />
                <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" stroke="#064E3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Ebook PDF</h3>
            <p>Guide Pratique des Agents IA &mdash; Version complete</p>
            <a
              href="/downloads/guide-agents-ia.pdf"
              download
              className={`${styles.dlBtn} ${styles.dlBtnPrimary}`}
            >
              Telecharger le PDF &darr;
            </a>
          </div>

          {/* Bonus Notion */}
          <div className={styles.dlCard}>
            <div className={`${styles.dlIcon} ${styles.dlIconGold}`}>
              <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                <path d="M4 4h16v16H4z" stroke="#C5A044" strokeWidth="1.5" />
                <path d="M9 8h6M9 12h6M9 16h4" stroke="#C5A044" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Bonus Notion</h3>
            <p>Templates, prompts et checklists &mdash; Espace Notion complet</p>
            <button
              onClick={copyNotionLink}
              className={`${styles.dlBtn} ${styles.dlBtnSecondary}`}
            >
              {copied ? 'Lien copie ✓' : 'Copier le lien Notion 📋'}
            </button>
          </div>

          {/* Upsell Kit IA */}
          <div className={`${styles.dlCard} ${styles.dlCardUpsell}`}>
            <div className={`${styles.dlIcon} ${styles.dlIconGold}`}>
              <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                <path d="M13 2L4.5 13.5H11.5L10.5 22L19.5 10.5H12.5L13 2Z" fill="#C5A044" />
              </svg>
            </div>
            <h3>Kit IA Solopreneur</h3>
            <p>Va encore plus loin : 12 agents avances, automatisations et support prioritaire.</p>
            <a
              href="https://buy.stripe.com/kit-ia-solopreneur"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.dlBtn} ${styles.dlBtnGold}`}
            >
              Decouvrir le Kit IA &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ══ INSTRUCTIONS ══ */}
      <section className={styles.section}>
        <div className={styles.instructionsCard}>
          <h2 className={styles.instructionsTitle}>Comment utiliser tes bonus</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <p>Telecharge le PDF et lis les chapitres 1 a 3 pour comprendre la logique des agents.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <p>Ouvre l&apos;espace Notion et duplique les templates dans ton workspace.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <p>Copie le prompt du premier agent dans ChatGPT ou Claude et teste-le.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <p>Suis le plan 30 jours pour deployer progressivement les 5 agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOOKMARK ══ */}
      <section className={styles.section}>
        <div className={styles.bookmarkCard}>
          <span className={styles.bookmarkIcon}>&#128278;</span>
          <h3>Ajoute cette page a tes favoris</h3>
          <p>
            Tu pourras revenir telecharger tes ressources a tout moment.
            Nous mettrons aussi a jour les bonus ici.
          </p>
        </div>
      </section>

      {/* ══ NEXT STEPS ══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Et maintenant ?</h2>
        <div className={styles.nextSteps}>
          <div className={styles.nextCard}>
            <span className={styles.nextEmoji}>&#128172;</span>
            <h3>Communaute</h3>
            <p>Rejoins le groupe pour echanger avec d&apos;autres solopreneurs qui utilisent l&apos;IA au quotidien.</p>
          </div>
          <div className={styles.nextCard}>
            <span className={styles.nextEmoji}>&#128218;</span>
            <h3>Ressources</h3>
            <p>Decouvre nos autres guides et formations pour aller plus loin avec l&apos;IA.</p>
          </div>
          <div className={styles.nextCard}>
            <span className={styles.nextEmoji}>&#128640;</span>
            <h3>Accompagnement</h3>
            <p>Besoin d&apos;un accompagnement personnalise ? Decouvre nos offres sur-mesure.</p>
            <Link href="/#offres" className={styles.nextLink}>
              Voir les offres &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer links={footerLinks} />
    </>
  )
}
