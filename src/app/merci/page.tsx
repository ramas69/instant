'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Confetti from '@/components/Confetti'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './page.module.css'

export default function MerciPage() {
  return (
    <>
      <Confetti />
      <ScrollReveal />
      <Nav links={[
        { href: '/#boutique', label: 'Boutique' },
        { href: '/#offres', label: 'Accompagnement' },
        { href: '/#rama', label: 'A propos' },
        { href: 'mailto:hello@instant-ia.com', label: 'Contactez-moi', isCta: true },
      ]} />

      {/* ══ HERO ══ */}
      <div className={styles.merciHero}>
        <div className={`${styles.merciCheck} rv`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className={`${styles.merciTitle} rv`}>Merci pour<br />ton <em>achat !</em></h1>
        <p className="rv">Ton paiement a &eacute;t&eacute; confirm&eacute;. Tu as maintenant acc&egrave;s &agrave; tous tes fichiers. T&eacute;l&eacute;charge-les ci-dessous et conserve cette page dans tes favoris pour y revenir &agrave; tout moment.</p>
      </div>

      {/* ══ DOWNLOADS ══ */}
      <section className={styles.downloads}>
        <div className={`${styles.dlSectionTitle} rv`}>Tes fichiers</div>
        <div className={styles.dlCards}>
          {/* Ebook PDF */}
          <div className={`${styles.dlCard} rv`}>
            <div className={`${styles.dlIcon} ${styles.diEbook}`}>&#128214;</div>
            <div className={styles.dlInfo}>
              <h3>Agents IA : Le Guide Pratique</h3>
              <p>L&apos;ebook complet &mdash; 60+ pages, 5 agents, frameworks, &eacute;tudes de cas</p>
            </div>
            <a href="/dl-guide-r4j6w3p1.pdf" download className={`${styles.dlBtn} ${styles.dlBtnPrimary}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              T&eacute;l&eacute;charger PDF
            </a>
          </div>

          {/* Bonus Notion */}
          <div className={`${styles.dlCard} rv d1`}>
            <div className={`${styles.dlIcon} ${styles.diBonus}`}>&#129504;</div>
            <div className={styles.dlInfo}>
              <h3>Bonus Notion &mdash; Prompts &amp; Templates</h3>
              <p>5 agents complets, framework RACE, checklists, matrices, plan 30 jours</p>
            </div>
            <a
              href="https://serial-rama.notion.site/Bonus-Agents-IA-Templates-Prompts-332f83faf500800abbd2cec87481c069"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.dlBtn} ${styles.dlBtnSecondary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
              Ouvrir dans Notion
            </a>
          </div>

          {/* Upsell Kit IA */}
          <div className={`${styles.dlCard} ${styles.dlCardUpsell} rv d2`}>
            <div className={`${styles.dlIcon} ${styles.diLead}`}>&#128640;</div>
            <div className={styles.dlInfo}>
              <h3>Envie d&apos;aller plus loin ?</h3>
              <p>Le Kit IA du Solopreneur : 50 m&eacute;ga-prompts + 5 workflows d&apos;automatisation pour scaler ton business.</p>
            </div>
            <a href="https://buy.stripe.com/test_3cI5kF6T1b7jgGIfs57g401" className={`${styles.dlBtn} ${styles.dlBtnSecondary}`}>
              D&eacute;couvrir le Kit &mdash; 27&euro; &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ══ INSTRUCTIONS ══ */}
      <section className={styles.section}>
        <div className={`${styles.instCard} rv`}>
          <div className={styles.instTitle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            Comment utiliser tes bonus
          </div>
          <div className={styles.steps}>
            <div className={styles.step}><div className={styles.stepNum}>1</div><div className={styles.stepText}><strong>Lis d&apos;abord l&apos;ebook</strong> &mdash; Les chapitres 2 &agrave; 6 expliquent chaque agent en d&eacute;tail. Les prompts du bonus sont con&ccedil;us pour &ecirc;tre utilis&eacute;s apr&egrave;s la lecture.</div></div>
            <div className={styles.step}><div className={styles.stepNum}>2</div><div className={styles.stepText}><strong>Ouvre le Notion</strong> &mdash; Clique sur &laquo; Ouvrir dans Notion &raquo; ci-dessus pour dupliquer le workspace dans ton propre Notion.</div></div>
            <div className={styles.step}><div className={styles.stepNum}>3</div><div className={styles.stepText}><strong>Personnalise les [PLACEHOLDERS]</strong> &mdash; Remplace [ENTREPRISE], [NOM], [SECTEUR] dans chaque prompt par tes propres informations.</div></div>
            <div className={styles.step}><div className={styles.stepNum}>4</div><div className={styles.stepText}><strong>Suis le plan 30 jours</strong> &mdash; Semaine 1 : audit. Semaine 2 : premier agent. Semaine 3 : optimisation. Semaine 4 : scaling.</div></div>
          </div>
        </div>
      </section>

      {/* ══ NEXT STEPS ══ */}
      <section className={styles.section}>
        <div className={`${styles.nsTitle} rv`}>Et maintenant ?</div>
        <div className={styles.nsGrid}>
          <div className={`${styles.nsCard} rv`}>
            <div className={styles.nsIcon}>&#128172;</div>
            <h3>Suis-moi sur LinkedIn</h3>
            <p>Tips IA, retours d&apos;exp&eacute;rience et actus &mdash; je partage tout l&agrave;-bas.</p>
            <a href="https://www.linkedin.com/in/rama-soumar%C3%A9-aa5131a0/" target="_blank" rel="noopener noreferrer" className={styles.nsLink}>Me suivre &rarr;</a>
          </div>
          <div className={`${styles.nsCard} rv d1`}>
            <div className={styles.nsIcon}>&#128218;</div>
            <h3>Le Kit IA du Solopreneur</h3>
            <p>50 m&eacute;ga-prompts + 5 workflows pour scaler ton business avec l&apos;IA.</p>
            <Link href="/kit-ia" className={styles.nsLink}>D&eacute;couvrir &mdash; 27&euro; &rarr;</Link>
          </div>
          <div className={`${styles.nsCard} rv d2`}>
            <div className={styles.nsIcon}>&#128640;</div>
            <h3>Besoin d&apos;accompagnement ?</h3>
            <p>R&eacute;serve un appel pour impl&eacute;menter l&apos;IA avec un expert.</p>
            <a href="mailto:hello@instant-ia.com" className={styles.nsLink}>Me contacter &rarr;</a>
          </div>
        </div>
      </section>

      <Footer links={[
        { href: '/#offres', label: 'Accompagnement' },
        { href: '/#boutique', label: 'Boutique' },
        { href: '/#rama', label: 'A propos' },
        { href: 'mailto:hello@instant-ia.com', label: 'Contact' },
      ]} />
    </>
  )
}
