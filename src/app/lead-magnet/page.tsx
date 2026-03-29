import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import SioForm from '@/components/SioForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '3 Agents IA du Solopreneur — Gratuit',
  description: 'Telecharge gratuitement 3 agents IA prets a l\'emploi pour automatiser ton contenu, tes emails et ta veille. En 10 minutes, tu decouvres ce que l\'IA peut faire pour ton business.',
}

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

export default function LeadMagnetPage() {
  return (
    <>
      <ScrollReveal />
      <Nav links={navLinks} />

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className="hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>

        <div className={styles.heroGrid}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <span className={styles.heroBadge}>100% Gratuit &middot; Acces immediat</span>
            <h1 className={styles.heroTitle}>
              3 Agents IA<br />
              <em>du Solopreneur</em>
            </h1>
            <p className={styles.heroSub}>
              Automatise ton contenu, tes emails et ta veille avec 3 agents IA prets a l&apos;emploi.
              Configure-les en 10 minutes, sans competence technique.
            </p>
            <div className={styles.heroTrust}>
              <span>&#10003; PDF pret a l&apos;emploi</span>
              <span>&#10003; Compatible ChatGPT &amp; Claude</span>
              <span>&#10003; 0 &euro; &mdash; aucune CB requise</span>
            </div>
          </div>

          {/* Right — form card */}
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <span className={styles.formCardIcon}>&#9889;</span>
              <h2 className={styles.formCardTitle}>Acces immediat &amp; gratuit</h2>
              <p className={styles.formCardDesc}>
                Recois les 3 agents par email en 30 secondes.
              </p>
            </div>
            <SioForm id="sio-hero" styles={styles} />
          </div>
        </div>
      </section>

      {/* ══ 3 AGENTS ══ */}
      <section className={`${styles.section} rv`}>
        <p className="section-tag">Ce que tu recois</p>
        <h2 className={styles.sectionTitle}>3 agents IA, prets a bosser pour toi</h2>

        <div className={styles.agentsGrid}>
          {/* Agent 1 */}
          <div className={styles.agentCard}>
            <span className={styles.agentEmoji}>&#128221;</span>
            <span className={styles.agentNum}>Agent 01</span>
            <h3>L&apos;Agent Contenu</h3>
            <ul className={styles.agentTasks}>
              <li>Genere des idees de posts LinkedIn</li>
              <li>Redige des brouillons structures</li>
              <li>Adapte le ton a ta marque</li>
            </ul>
            <div className={styles.agentResult}>
              &#8594; 5 posts/semaine en 20 min au lieu de 3h
            </div>
          </div>

          {/* Agent 2 */}
          <div className={styles.agentCard}>
            <span className={styles.agentEmoji}>&#128140;</span>
            <span className={styles.agentNum}>Agent 02</span>
            <h3>L&apos;Agent Email</h3>
            <ul className={styles.agentTasks}>
              <li>Ecrit des sequences email engageantes</li>
              <li>Personnalise les relances clients</li>
              <li>Optimise tes objets pour l&apos;ouverture</li>
            </ul>
            <div className={styles.agentResult}>
              &#8594; +40% de taux d&apos;ouverture en moyenne
            </div>
          </div>

          {/* Agent 3 */}
          <div className={styles.agentCard}>
            <span className={styles.agentEmoji}>&#128202;</span>
            <span className={styles.agentNum}>Agent 03</span>
            <h3>L&apos;Agent Veille</h3>
            <ul className={styles.agentTasks}>
              <li>Surveille ton secteur automatiquement</li>
              <li>Resume les tendances cles</li>
              <li>Te prepare un brief quotidien</li>
            </ul>
            <div className={styles.agentResult}>
              &#8594; 1h de veille compressee en 5 min
            </div>
          </div>
        </div>
      </section>

      {/* ══ BEFORE / AFTER ══ */}
      <section className={`${styles.section} ${styles.baSection} rv`}>
        <h2 className={styles.sectionTitle}>
          Avec ou sans agents IA,<br />deux realites differentes.
        </h2>

        <div className={styles.baGrid}>
          <div className={styles.baBefore}>
            <h3 className={styles.baLabel}>&#10060; Sans agents</h3>
            <ul>
              <li>3h pour ecrire un seul post</li>
              <li>Emails generiques, taux d&apos;ouverture faible</li>
              <li>Veille manuelle, toujours en retard</li>
              <li>Sentiment de perdre du temps chaque jour</li>
            </ul>
          </div>
          <div className={styles.baAfter}>
            <h3 className={styles.baLabel}>&#10004; Avec agents IA</h3>
            <ul>
              <li>5 posts par semaine en 20 minutes</li>
              <li>Emails personnalises, +40% d&apos;ouverture</li>
              <li>Brief quotidien en 5 min</li>
              <li>Tu te concentres sur ce qui compte vraiment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══ SNEAK PEEK ══ */}
      <section className={`${styles.section} ${styles.peekSection} rv`}>
        <p className="section-tag">Apercu</p>
        <h2 className={styles.sectionTitle}>Un avant-gout de ce qui t&apos;attend</h2>

        <div className={styles.peekCard}>
          <div className={styles.peekHeader}>
            <span className={styles.peekBadge}>Agent Contenu &mdash; Extrait</span>
          </div>
          <div className={styles.peekPrompt}>
            <p>
              <strong>Role :</strong> Tu es un expert en content marketing specialise LinkedIn.
              Tu ecris dans un style direct, humain et engageant.
            </p>
            <div className={styles.peekBlur}>
              <p>
                <strong>Contexte :</strong> Mon audience est composee de solopreneurs et dirigeants
                de TPE francophones. Mon ton est conversationnel, avec des phrases courtes
                et des exemples concrets issus du terrain&hellip;
              </p>
              <p>
                <strong>Tache :</strong> Genere 5 idees de posts LinkedIn pour cette semaine,
                chacune avec un hook, un angle et un CTA&hellip;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO ══ */}
      <section className={`${styles.section} rv`}>
        <p className="section-tag">Pour qui ?</p>
        <h2 className={styles.sectionTitle}>C&apos;est fait pour toi si&hellip;</h2>

        <ul className={styles.whoList}>
          <li className={styles.whoItem}>
            <span className={styles.whoCheck}>&#10003;</span>
            Tu es <strong>solopreneur</strong> et tu veux gagner du temps chaque jour
          </li>
          <li className={styles.whoItem}>
            <span className={styles.whoCheck}>&#10003;</span>
            Tu es <strong>coach</strong> et tu veux automatiser ta creation de contenu
          </li>
          <li className={styles.whoItem}>
            <span className={styles.whoCheck}>&#10003;</span>
            Tu es <strong>freelance</strong> et tu veux professionnaliser tes process
          </li>
          <li className={styles.whoItem}>
            <span className={styles.whoCheck}>&#10003;</span>
            Tu es <strong>dirigeant de TPE</strong> et tu veux explorer l&apos;IA sans risque
          </li>
          <li className={styles.whoItem}>
            <span className={styles.whoCheck}>&#10003;</span>
            Tu es <strong>curieux de l&apos;IA</strong> et tu veux un premier resultat concret
          </li>
        </ul>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className={`${styles.section} ${styles.finalCta} rv`}>
        <h2 className={styles.sectionTitle}>
          Teste l&apos;IA pour de vrai.<br />
          <em>En 10 minutes.</em>
        </h2>
        <p className={styles.finalCtaSub}>
          Recois les 3 agents par email, configure-les et vois les resultats aujourd&apos;hui.
        </p>

        <div className={styles.formCard} style={{ maxWidth: 480, margin: '0 auto' }}>
          <SioForm id="sio-final" styles={styles} />
        </div>

        <div className={styles.heroTrust} style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <span>&#10003; 100% gratuit</span>
          <span>&#10003; Aucune CB</span>
          <span>&#10003; Acces immediat</span>
        </div>
      </section>

      <Footer links={footerLinks} />
    </>
  )
}
