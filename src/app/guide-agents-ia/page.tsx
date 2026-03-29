import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Guide Pratique des Agents IA — Comprends, cr\u00e9e et d\u00e9ploie tes agents',
  description: 'Le guide complet pour comprendre, cr\u00e9er et d\u00e9ployer tes propres agents IA \u2014 m\u00eame sans coder. 5 agents pr\u00eats \u00e0 l\'emploi + bonus Notion. 29\u20ac.',
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

const faqItems = [
  { question: "C\u2019est quoi le format exactement ?", answer: "Un PDF de 100+ pages, structur\u00e9 en 6 chapitres progressifs, avec des sch\u00e9mas, des templates et des prompts pr\u00eats \u00e0 l\u2019emploi. Tu re\u00e7ois aussi un espace Notion bonus avec tous les templates organis\u00e9s." },
  { question: "Comment j\u2019y acc\u00e8de apr\u00e8s l\u2019achat ?", answer: "Paiement s\u00e9curis\u00e9 par Stripe, puis redirection imm\u00e9diate vers ta page de t\u00e9l\u00e9chargement. Tu re\u00e7ois aussi un email de confirmation avec le lien. Tu peux re-t\u00e9l\u00e9charger \u00e0 tout moment." },
  { question: "Je dois savoir coder ?", answer: "Non. Le guide est con\u00e7u pour les non-techniques. Tu utilises des outils no-code comme Make, Zapier ou les fonctionnalit\u00e9s natives de Claude. Chaque \u00e9tape est expliqu\u00e9e simplement avec des captures d\u2019\u00e9cran." },
  { question: "Quelle diff\u00e9rence avec les tutos YouTube ?", answer: "YouTube te donne des fragments. Ce guide te donne le syst\u00e8me complet : comprendre les agents, les concevoir avec le framework RACE, les construire pas \u00e0 pas, et les d\u00e9ployer avec un plan sur 30 jours. C\u2019est structur\u00e9, progressif et actionnable." },
  { question: "C\u2019est quoi le Framework RACE ?", answer: "R\u00f4le, Actions, Contexte, \u00c9valuation. C\u2019est la m\u00e9thode que j\u2019ai cr\u00e9\u00e9e pour concevoir des agents IA efficaces. Tu la retrouves dans le chapitre 3, avec des exemples concrets pour chaque \u00e9tape." },
  { question: "Et si \u00e7a ne me convient pas ?", answer: "Garantie 30 jours satisfait ou rembours\u00e9, sans condition. Tu m\u2019envoies un email, je te rembourse. Z\u00e9ro risque de ton c\u00f4t\u00e9." },
]

export default function GuideAgentsIAPage() {
  return (
    <>
      <ScrollReveal />
      <Nav links={navLinks} />

      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className="hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <span className={`${styles.heroBadge} rv d1`}>Guide complet &middot; 100+ pages</span>
            <h1 className="rv d2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', fontWeight: 400, lineHeight: 1.1, marginBottom: '1rem' }}>
              Guide Pratique des <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)' }}>Agents IA</em>
            </h1>
            <p className="rv d3" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 500 }}>
              Comprends, cr&eacute;e et d&eacute;ploie tes propres agents IA &mdash; m&ecirc;me sans coder.
              Le guide complet pour passer du prompt unique &agrave; l&rsquo;automatisation intelligente.
            </p>
            <div className={`${styles.heroPrice} rv d3`}>
              <span className={styles.heroPriceOld}>49&euro;</span>
              <span className={styles.heroPriceAmount}>29&euro;</span>
            </div>
            <a href="https://buy.stripe.com/dRm00j42ZbsEcKkcNodIA02" className="btn-buy rv d4">
              T&eacute;l&eacute;charger le Guide &rarr;
            </a>
            <div className={`${styles.heroTrust} rv d5`}>
              <span>&#128274; Paiement s&eacute;curis&eacute;</span>
              <span>&#9889; T&eacute;l&eacute;chargement imm&eacute;diat</span>
              <span>&#128176; Garantie 30 jours</span>
            </div>
          </div>
          <div className={`${styles.heroRight} rv-r d3`}>
            <div className={styles.heroCard}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#fff', fontWeight: 400, marginBottom: '1.5rem' }}>Ce que tu obtiens</h3>
              <div className={styles.heroFeats}>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#129302;</span> 5 agents pr&ecirc;ts &agrave; l&rsquo;emploi</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#127919;</span> Framework RACE exclusif</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#128197;</span> Plan d&rsquo;action 30 jours</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#128221;</span> Espace Notion bonus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM / BEFORE-AFTER ═══ */}
      <section className="problem">
        <h2 className="rv">
          Tu utilises l&rsquo;IA pour des t&acirc;ches isol&eacute;es.<br />
          Tu rates la <em>vraie r&eacute;volution</em>.
        </h2>
        <p className="rv d1">Les agents IA ne sont pas un gadget. C&rsquo;est la diff&eacute;rence entre utiliser l&rsquo;IA comme un outil et la transformer en collaborateur autonome.</p>
        <div className="before-after rv d2">
          <div className="ba-card ba-before">
            <div className="ba-label">Sans agents</div>
            <div className="ba-item">Tu lances un prompt, tu obtiens une r&eacute;ponse, tu recommences</div>
            <div className="ba-item">Chaque t&acirc;che est manuelle et isol&eacute;e</div>
            <div className="ba-item">Aucune continuit&eacute; ni m&eacute;moire entre les sessions</div>
            <div className="ba-item">Tu es le goulot d&rsquo;&eacute;tranglement</div>
            <div className="ba-item">Impossible de d&eacute;l&eacute;guer &agrave; l&rsquo;IA</div>
          </div>
          <div className="ba-arrow">&rarr;</div>
          <div className="ba-card ba-after">
            <div className="ba-label">Avec le Guide</div>
            <div className="ba-item">Tes agents travaillent en cha&icirc;ne, 24h/24</div>
            <div className="ba-item">Chaque agent a un r&ocirc;le pr&eacute;cis et autonome</div>
            <div className="ba-item">Syst&egrave;mes connect&eacute;s avec m&eacute;moire et contexte</div>
            <div className="ba-item">Tu supervises, tu ne fais plus tout</div>
            <div className="ba-item">Tu scales sans recruter</div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INSIDE ═══ */}
      <section style={{ background: 'var(--warm)', padding: '6rem 3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-tag rv">Contenu du guide</p>
          <h2 className="rv d1" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green)', fontWeight: 400, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.15 }}>
            6 chapitres pour ma&icirc;triser les <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Agents IA</em>
          </h2>

          <div className={styles.chGrid}>
            {[
              { num: '01', name: 'Agents IA 101', desc: 'Comprendre ce qu\u2019est un agent, comment il fonctionne et pourquoi c\u2019est diff\u00e9rent d\u2019un simple prompt.' },
              { num: '02', name: 'Les 5 Agents Incontournables', desc: 'D\u00e9couvre les 5 agents que tout solopreneur devrait d\u00e9ployer en priorit\u00e9, avec exemples concrets.' },
              { num: '03', name: 'Construis ton Premier Agent', desc: 'Le framework RACE pas \u00e0 pas : R\u00f4le, Actions, Contexte, \u00c9valuation. Z\u00e9ro code requis.' },
              { num: '04', name: 'Techniques Avanc\u00e9es', desc: 'Cha\u00eenage d\u2019agents, m\u00e9moire persistante, boucles de feedback et orchestration multi-agents.' },
              { num: '05', name: "Plan d\u2019Action 30 Jours", desc: 'Semaine par semaine, d\u00e9ploie tes agents et mesure les r\u00e9sultats. Checklist incluse.' },
              { num: '06', name: "5 Templates Pr\u00eats \u00e0 l\u2019Emploi", desc: 'Copie-colle ces templates dans Claude et lance tes agents en 5 minutes.' },
            ].map((ch, i) => (
              <div key={ch.num} className={`${styles.chCard} rv d${Math.min(i + 1, 5)}`}>
                <span className={styles.chNum}>{ch.num}</span>
                <h3>{ch.name}</h3>
                <p>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5 AGENTS ═══ */}
      <section style={{ padding: '6rem 3rem', maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-tag rv">Les 5 agents</p>
        <h2 className="rv d1" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green)', fontWeight: 400, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.15 }}>
          5 agents pr&ecirc;ts &agrave; <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>d&eacute;ployer</em>
        </h2>
        <div className={styles.agentsGrid}>
          {[
            { icon: '🔍', name: 'Le Prospecteur', use: 'Identifie et qualifie tes prospects id\u00e9aux automatiquement' },
            { icon: '📣', name: 'Le Community Manager', use: 'Cr\u00e9e, planifie et publie ton contenu sur tous tes r\u00e9seaux' },
            { icon: '🤝', name: 'Le Support Client', use: 'R\u00e9pond \u00e0 tes clients 24/7 avec ton ton et tes process' },
            { icon: '📊', name: "L\u2019Analyste Veille", use: 'Surveille ton march\u00e9, tes concurrents et les tendances cl\u00e9s' },
            { icon: '🎯', name: "L\u2019Onboarder Client", use: 'Accueille et guide tes nouveaux clients automatiquement' },
          ].map((agent, i) => (
            <div key={agent.name} className={`${styles.agentCard} rv d${i + 1}`}>
              <span className={styles.agentIcon}>{agent.icon}</span>
              <h3>{agent.name}</h3>
              <p className={styles.agentUse}>{agent.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SNEAK PEEK ═══ */}
      <section style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
        <p className="section-tag rv">Aper&ccedil;u</p>
        <h2 className="rv d1" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green)', fontWeight: 400, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.15 }}>
          Un avant-go&ucirc;t de ce qui t&rsquo;attend
        </h2>
        <div className={styles.peekCards}>
          <div className={`${styles.peekCard} rv d1`}>
            <h3>Agent Prospecteur &mdash; Prompt</h3>
            <p>Cet agent identifie tes prospects id&eacute;aux, qualifie leur niveau d&rsquo;int&eacute;r&ecirc;t et pr&eacute;pare des messages personnalis&eacute;s.</p>
            <div className={styles.peekPrompt}>
              <code>Tu es un agent de prospection B2B expert. Ton r&ocirc;le : analyser [SECTEUR], identifier les d&eacute;cideurs cl&eacute;s, &eacute;valuer leur potentiel selon [CRIT&Egrave;RES] et r&eacute;diger un message d&rsquo;approche personnalis&eacute; pour chacun...</code>
            </div>
          </div>
          <div className={`${styles.peekCard} rv d2`}>
            <h3>Agent Support Client &mdash; Architecture</h3>
            <p>D&eacute;couvre comment structurer un agent support qui g&egrave;re 80% des demandes sans intervention humaine.</p>
            <div className={styles.peekPrompt}>
              <code>Architecture : 1) R&eacute;ception &rarr; classification automatique 2) Base de connaissances &rarr; r&eacute;ponse contextuelle 3) Escalade intelligente &rarr; transfert humain si n&eacute;cessaire 4) Feedback loop &rarr; am&eacute;lioration continue...</code>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BONUS ═══ */}
      <section style={{ background: 'var(--warm)', padding: '6rem 3rem' }}>
        <div className={styles.bonusGrid} style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="rv-l d1">
            <p className="section-tag" style={{ textAlign: 'left' }}>Bonus inclus</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--green)', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Espace Notion <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>tout-en-un</em>
            </h2>
            <p style={{ color: 'var(--txt2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              En plus du guide PDF, tu re&ccedil;ois un espace Notion complet pour organiser, suivre et optimiser tes agents IA.
            </p>
            <ul className={styles.bonusChecklist}>
              <li>Dashboard de suivi de tes agents</li>
              <li>Templates dupliqu&eacute;s et pr&ecirc;ts &agrave; remplir</li>
              <li>Checklist du plan 30 jours</li>
              <li>Base de connaissances extensible</li>
            </ul>
            <Link href="/templates" className="btn-card" style={{ marginTop: '1rem' }}>
              D&eacute;couvrir les templates &rarr;
            </Link>
          </div>
          <div className={`${styles.bonusVisual} rv-r d2`}>
            <div className={styles.bonusFeat}>
              <div className={styles.bonusItem}>
                <span>&#128203;</span>
                <div>
                  <strong>5 templates agents</strong>
                  <p>Pr&ecirc;ts &agrave; dupliquer dans Notion</p>
                </div>
              </div>
              <div className={styles.bonusItem}>
                <span>&#128202;</span>
                <div>
                  <strong>Dashboard de suivi</strong>
                  <p>Mesure la performance de chaque agent</p>
                </div>
              </div>
              <div className={styles.bonusItem}>
                <span>&#9745;&#65039;</span>
                <div>
                  <strong>Checklist 30 jours</strong>
                  <p>Coche chaque &eacute;tape au fur et &agrave; mesure</p>
                </div>
              </div>
              <div className={styles.bonusItem}>
                <span>&#128218;</span>
                <div>
                  <strong>Base de connaissances</strong>
                  <p>Centralise les infos de tes agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section style={{ padding: '6rem 3rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-tag rv">Pour qui ?</p>
          <h2 className="rv d1" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green)', fontWeight: 400, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.15 }}>
            Ce Guide est fait pour toi si&hellip;
          </h2>
          <div className={styles.whoGrid}>
            <div className={`${styles.whoCard} rv d1`}>
              <span className={styles.whoIcon}>&#128187;</span>
              <h3>Solopreneur / Freelance</h3>
              <p>Tu veux automatiser tes process et cr&eacute;er des syst&egrave;mes qui travaillent pour toi, m&ecirc;me quand tu dors.</p>
            </div>
            <div className={`${styles.whoCard} rv d2`}>
              <span className={styles.whoIcon}>&#127891;</span>
              <h3>Coach / Consultant</h3>
              <p>Tu veux offrir une exp&eacute;rience client premium avec un onboarding et un support automatis&eacute;s.</p>
            </div>
            <div className={`${styles.whoCard} rv d3`}>
              <span className={styles.whoIcon}>&#127970;</span>
              <h3>Dirigeant TPE</h3>
              <p>Tu veux d&eacute;ployer des agents dans ton &eacute;quipe pour gagner en efficacit&eacute; sans complexit&eacute; technique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqAccordion items={faqItems} />

      {/* ═══ FINAL CTA ═══ */}
      <section className="final-cta">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="final-cta-inner">
          <h2 className="rv">Passe du prompt unique &agrave;<br /><em>l&rsquo;automatisation intelligente.</em></h2>
          <p className="rv d1">5 agents pr&ecirc;ts &agrave; l&rsquo;emploi + le framework RACE + un plan 30 jours.</p>
          <div className="final-price rv d2">29&euro;</div>
          <div className="final-price-old rv d2">49&euro;</div>
          <a href="https://buy.stripe.com/dRm00j42ZbsEcKkcNodIA02" className="btn-buy rv d3">
            T&eacute;l&eacute;charger le Guide &rarr;
          </a>
          <div className="final-trust rv d4">
            <span>&#128274; Paiement s&eacute;curis&eacute;</span>
            <span>&#9889; T&eacute;l&eacute;chargement imm&eacute;diat</span>
            <span>&#128176; Garantie 30 jours</span>
          </div>
        </div>
      </section>

      <Footer links={footerLinks} />
    </>
  )
}
