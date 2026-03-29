'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Confetti from '@/components/Confetti'
import ScrollReveal from '@/components/ScrollReveal'
import styles from '../merci/page.module.css'

export default function MerciKitPage() {
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
        <p className="rv">Ton paiement a &eacute;t&eacute; confirm&eacute;. Le Kit IA du Solopreneur est pr&ecirc;t. T&eacute;l&eacute;charge-le ci-dessous et conserve cette page dans tes favoris.</p>
      </div>

      {/* ══ DOWNLOADS ══ */}
      <section className={styles.downloads}>
        <div className={`${styles.dlSectionTitle} rv`}>Ton fichier</div>
        <div className={styles.dlCards}>
          {/* Kit IA PDF */}
          <div className={`${styles.dlCard} rv`}>
            <div className={`${styles.dlIcon} ${styles.diEbook}`}>&#9889;</div>
            <div className={styles.dlInfo}>
              <h3>Le Kit IA du Solopreneur</h3>
              <p>50 m&eacute;ga-prompts Claude + 5 workflows d&apos;automatisation &mdash; 70 pages</p>
            </div>
            <a href="/dl-kit-8f7k2m9x.pdf" download className={`${styles.dlBtn} ${styles.dlBtnPrimary}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              T&eacute;l&eacute;charger PDF
            </a>
          </div>

          {/* Cross-sell Guide Agents IA */}
          <div className={`${styles.dlCard} ${styles.dlCardUpsell} rv d1`}>
            <div className={`${styles.dlIcon} ${styles.diLead}`}>&#129302;</div>
            <div className={styles.dlInfo}>
              <h3>Envie d&apos;aller plus loin ?</h3>
              <p>Le Guide Pratique des Agents IA : cr&eacute;e et d&eacute;ploie tes propres agents autonomes.</p>
            </div>
            <a href="https://buy.stripe.com/test_28E6oJ2CL2AN7685Rv7g400" className={`${styles.dlBtn} ${styles.dlBtnSecondary}`}>
              D&eacute;couvrir le Guide &mdash; 29&euro; &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ══ INSTRUCTIONS ══ */}
      <section className={styles.section}>
        <div className={`${styles.instCard} rv`}>
          <div className={styles.instTitle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            Comment utiliser ton Kit
          </div>
          <div className={styles.steps}>
            <div className={styles.step}><div className={styles.stepNum}>1</div><div className={styles.stepText}><strong>Ouvre le PDF</strong> &mdash; Parcours les 5 cat&eacute;gories : Contenu, Vente, Strat&eacute;gie, Productivit&eacute;, Support. Rep&egrave;re celle qui correspond &agrave; ton besoin le plus urgent.</div></div>
            <div className={styles.step}><div className={styles.stepNum}>2</div><div className={styles.stepText}><strong>Copie ton premier prompt</strong> &mdash; Choisis un prompt, copie-le dans Claude (ou ChatGPT), et remplace les [VARIABLES] entre crochets par tes infos.</div></div>
            <div className={styles.step}><div className={styles.stepNum}>3</div><div className={styles.stepText}><strong>Teste un workflow complet</strong> &mdash; Va aux workflows (p. 55+). Encha&icirc;ne les 3-5 prompts d&apos;un workflow pour voir la puissance du chaining.</div></div>
            <div className={styles.step}><div className={styles.stepNum}>4</div><div className={styles.stepText}><strong>Adapte et it&egrave;re</strong> &mdash; Ajuste les prompts &agrave; ton ton, ton secteur, ta cible. Plus tu personnalises, meilleurs sont les r&eacute;sultats.</div></div>
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
            <div className={styles.nsIcon}>&#129302;</div>
            <h3>Guide Agents IA</h3>
            <p>Cr&eacute;e et d&eacute;ploie tes propres agents IA autonomes &mdash; m&ecirc;me sans coder.</p>
            <Link href="/guide-agents-ia" className={styles.nsLink}>D&eacute;couvrir &mdash; 29&euro; &rarr;</Link>
          </div>
          <div className={`${styles.nsCard} rv d2`}>
            <div className={styles.nsIcon}>&#128640;</div>
            <h3>Besoin d&apos;accompagnement ?</h3>
            <p>Audit + consulting sur-mesure pour int&eacute;grer l&apos;IA dans ton business.</p>
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
