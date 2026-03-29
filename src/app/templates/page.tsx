import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Bonus Ebook — Templates & Prompts Agents IA',
  description: 'Bonus reserve aux acheteurs du Guide Pratique des Agents IA. 5 agents prets-a-l\'emploi, framework RACE, checklists et plan 30 jours.',
}

const navLinks = [
  { href: '/#offres', label: 'Offres' },
  { href: '/#boutique', label: 'Boutique' },
  { href: '/#rama', label: 'A propos' },
  { href: 'mailto:hello@instant-ia.com', label: 'Contactez-moi', isCta: true },
]

const footerLinks = [
  { href: '/#offres', label: 'Offres' },
  { href: '/#boutique', label: 'Boutique' },
  { href: '/#rama', label: 'A propos' },
  { href: 'mailto:hello@instant-ia.com', label: 'Contact' },
]

const agents = [
  {
    emoji: '📝',
    num: 'Agent 01',
    title: 'Agent Redaction',
    titleEm: 'LinkedIn',
    desc: 'Genere des posts engageants, adaptes a ton audience et a ta voix.',
    variant: 'apDark',
  },
  {
    emoji: '💌',
    num: 'Agent 02',
    title: 'Agent Email',
    titleEm: 'Marketing',
    desc: 'Ecris des sequences email qui convertissent, du welcome au nurturing.',
    variant: 'apWarm',
  },
  {
    emoji: '📊',
    num: 'Agent 03',
    title: 'Agent Veille',
    titleEm: 'Strategique',
    desc: 'Surveille ton marche et resume les tendances cles chaque jour.',
    variant: 'apWhite',
  },
  {
    emoji: '🌟',
    num: 'Agent 04',
    title: 'Agent Offre',
    titleEm: 'Commerciale',
    desc: 'Structure et redige tes propositions commerciales percutantes.',
    variant: 'apGold',
  },
  {
    emoji: '🚀',
    num: 'Agent 05',
    title: 'Agent Onboarding',
    titleEm: 'Client',
    desc: 'Cree des parcours d\'accueil client automatises et personnalises.',
    variant: 'apWarm',
  },
]

const extras = [
  { emoji: '🧠', title: 'Framework RACE', desc: 'La methode structuree pour creer des prompts qui fonctionnent a chaque fois.' },
  { emoji: '✔', title: '3 Checklists', desc: 'Avant de lancer un agent, pendant l\'execution, et apres pour optimiser.' },
  { emoji: '📊', title: 'Matrices & Tableaux', desc: 'Matrices de decision et tableaux de suivi prets a remplir.' },
  { emoji: '📅', title: 'Plan 30 jours', desc: 'Un plan d\'action jour par jour pour deployer tes agents progressivement.' },
]

export default function TemplatesPage() {
  return (
    <>
      <ScrollReveal />
      <Nav links={navLinks} />

      {/* ══ BONUS HERO ══ */}
      <section className={styles.bonusHero}>
        <span className={styles.bonusBadge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#E8C547" />
          </svg>
          Bonus exclusif acheteurs
        </span>
        <h1 className={styles.bonusTitle}>
          Templates &amp; Prompts<br />
          <em>Agents IA</em>
        </h1>
        <p className={styles.bonusDesc}>
          5 agents prets a l&apos;emploi, framework RACE, checklists et plan d&apos;action 30 jours.
          Tout ce qu&apos;il faut pour passer a l&apos;action immediatement.
        </p>
        <span className={styles.ebookRef}>
          &#128218; Bonus du &laquo; Guide Pratique des Agents IA &raquo;
        </span>
      </section>

      {/* ══ 5 AGENTS PREVIEW ══ */}
      <section className={`${styles.section} rv`}>
        <p className="section-tag">5 agents inclus</p>
        <h2 className={styles.sectionTitle}>Des agents prets, pas des prompts generiques</h2>

        <div className={styles.agentsPreview}>
          {agents.map((agent, i) => (
            <div key={i} className={`${styles.agentPrev} ${styles[agent.variant]}`}>
              <span className={styles.apEmoji}>{agent.emoji}</span>
              <span className={styles.apNum}>{agent.num}</span>
              <h3>
                {agent.title} <em>{agent.titleEm}</em>
              </h3>
              <p>{agent.desc}</p>
              <div className={styles.promptLocked}>
                <div className={styles.promptLockedText}>
                  Tu es un expert en {agent.titleEm.toLowerCase()} specialise dans
                  l&apos;accompagnement des solopreneurs. Ton objectif est de...
                </div>
                <span className={styles.promptLockBadge}>&#128274; Reserve acheteurs</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ EXTRAS ══ */}
      <section className={`${styles.section} rv`}>
        <p className="section-tag">Et aussi</p>
        <h2 className={styles.sectionTitle}>Les outils qui completent les agents</h2>

        <div className={styles.extrasGrid}>
          {extras.map((extra, i) => (
            <div key={i} className={styles.extraCard}>
              <span className={styles.extraEmoji}>{extra.emoji}</span>
              <h3>{extra.title}</h3>
              <p>{extra.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BONUS CTA ══ */}
      <section className={`${styles.section} ${styles.bonusCta} rv`}>
        <h2 className={styles.sectionTitle}>
          Obtiens le guide<br />
          <em>+ tous les bonus</em>
        </h2>
        <div className={styles.ctaPrice}>
          <span className={styles.oldPrice}>49 &euro;</span>
          <span className={styles.newPrice}>29 &euro;</span>
        </div>
        <Link href="/#boutique" className="btn-buy">
          Obtenir le guide + les bonus &rarr;
        </Link>
        <div className={styles.ctaTrust}>
          <span>&#10003; Acces immediat</span>
          <span>&#10003; Templates Notion inclus</span>
          <span>&#10003; Mises a jour gratuites</span>
        </div>
      </section>

      <Footer links={footerLinks} />
    </>
  )
}
