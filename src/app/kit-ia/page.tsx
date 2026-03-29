import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Le Kit IA du Solopreneur — 50 M\u00e9ga-Prompts Claude + 5 Workflows',
  description: '50 m\u00e9ga-prompts Claude test\u00e9s + 5 workflows d\'automatisation. 70 pages de contenu actionnable pour scaler ton business sans recruter. 27\u20ac.',
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
  { question: "C\u2019est quoi le format exactement ?", answer: "Un PDF de 70 pages, magnifiquement mis en page, avec tous les prompts pr\u00eats \u00e0 copier-coller directement dans Claude. Pas de vid\u00e9o, pas de plateforme, pas de friction \u2014 tu t\u00e9l\u00e9charges et tu utilises." },
  { question: "Comment j\u2019y acc\u00e8de apr\u00e8s l\u2019achat ?", answer: "Paiement s\u00e9curis\u00e9 par Stripe, puis redirection imm\u00e9diate vers ta page de t\u00e9l\u00e9chargement. Tu re\u00e7ois aussi un email de confirmation avec le lien. Tu peux re-t\u00e9l\u00e9charger \u00e0 tout moment." },
  { question: "\u00c7a marche avec ChatGPT ou seulement Claude ?", answer: "Les prompts sont optimis\u00e9s pour Claude (Anthropic), mais 90% fonctionnent aussi tr\u00e8s bien avec ChatGPT ou Gemini. La structure des prompts est universelle \u2014 seuls quelques ajustements mineurs peuvent \u00eatre n\u00e9cessaires." },
  { question: "Je suis d\u00e9butant avec l\u2019IA, c\u2019est pour moi ?", answer: "Absolument. Chaque prompt est pr\u00eat \u00e0 l\u2019emploi \u2014 tu copies, tu remplaces les variables entre crochets par tes infos, et tu lances. Pas besoin de comprendre le prompt engineering, c\u2019est d\u00e9j\u00e0 fait pour toi." },
  { question: "27\u20ac c\u2019est pas trop beau pour \u00eatre vrai ?", answer: "Le prix de lancement est volontairement bas. Mon objectif, c\u2019est que tu voies la valeur et que tu reviennes pour le Guide Agents IA ou l\u2019accompagnement. Mais m\u00eame \u00e0 27\u20ac, le ROI est imm\u00e9diat : un seul prompt bien utilis\u00e9 te fait gagner 2-3h de travail." },
  { question: "Et si \u00e7a ne me convient pas ?", answer: "Garantie 30 jours satisfait ou rembours\u00e9, sans condition. Tu m\u2019envoies un email, je te rembourse. Z\u00e9ro risque de ton c\u00f4t\u00e9." },
]

export default function KitIAPage() {
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
            <span className={`${styles.heroBadge} rv d1`}>Best-seller &middot; 70 pages</span>
            <h1 className="rv d2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', fontWeight: 400, lineHeight: 1.1, marginBottom: '1rem' }}>
              Le Kit IA du <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)' }}>Solopreneur</em>
            </h1>
            <p className="rv d3" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 500 }}>
              50 m&eacute;ga-prompts Claude test&eacute;s + 5 workflows d&rsquo;automatisation.
              Tout ce qu&rsquo;il te faut pour scaler ton business sans recruter.
            </p>
            <div className={`${styles.heroPrice} rv d3`}>
              <span className={styles.heroPriceOld}>47&euro;</span>
              <span className={styles.heroPriceAmount}>27&euro;</span>
            </div>
            <a href="https://buy.stripe.com/test_3cI5kF6T1b7jgGIfs57g401" className="btn-buy rv d4">
              T&eacute;l&eacute;charger le Kit &rarr;
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
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#128196;</span> 50 m&eacute;ga-prompts test&eacute;s et optimis&eacute;s</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#9881;&#65039;</span> 5 workflows d&rsquo;automatisation complets</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#128218;</span> 70 pages de contenu actionnable</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#127919;</span> 5 cat&eacute;gories business couvertes</div>
                <div className={styles.heroFeat}><span className={styles.heroFeatIcon}>&#128260;</span> Copier-coller, pas de friction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM / BEFORE-AFTER ═══ */}
      <section className="problem">
        <h2 className="rv">
          Tu utilises Claude comme un moteur de recherche.<br />
          Tu passes &agrave; c&ocirc;t&eacute; de <em>95% de sa puissance</em>.
        </h2>
        <p className="rv d1">La diff&eacute;rence entre un prompt basique et un m&eacute;ga-prompt structur&eacute;, c&rsquo;est la diff&eacute;rence entre un stagiaire et un expert senior.</p>
        <div className="before-after rv d2">
          <div className="ba-card ba-before">
            <div className="ba-label">Sans le Kit</div>
            <div className="ba-item">Prompts g&eacute;n&eacute;riques copi&eacute;s de Twitter</div>
            <div className="ba-item">R&eacute;sultats fades, ton robot</div>
            <div className="ba-item">3h pour &eacute;crire un article moyen</div>
            <div className="ba-item">Aucune strat&eacute;gie, juste du texte</div>
            <div className="ba-item">Frustration et abandon</div>
          </div>
          <div className="ba-arrow">&rarr;</div>
          <div className="ba-card ba-after">
            <div className="ba-label">Avec le Kit</div>
            <div className="ba-item">50 prompts expert, test&eacute;s sur de vrais business</div>
            <div className="ba-item">Contenu avec ta voix, ton style</div>
            <div className="ba-item">20 min pour un article premium</div>
            <div className="ba-item">Strat&eacute;gie compl&egrave;te : contenu, vente, support</div>
            <div className="ba-item">Un syst&egrave;me qui scale avec toi</div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INSIDE ═══ */}
      <section className={styles.inside} style={{ background: 'var(--warm)', padding: '6rem 3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-tag rv">Ce que contient le kit</p>
          <h2 className="rv d1" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green)', fontWeight: 400, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.15 }}>
            50 prompts organis&eacute;s en <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>5 cat&eacute;gories</em>
          </h2>

          <div className={styles.catGrid}>
            {[
              { icon: '✍️', name: 'Contenu', count: '12+', examples: 'Articles, posts LinkedIn, newsletters, scripts vid\u00e9o' },
              { icon: '💰', name: 'Vente', count: '14+', examples: 'Pages de vente, emails, s\u00e9quences de relance' },
              { icon: '🎯', name: 'Strat\u00e9gie', count: '10+', examples: 'Analyse march\u00e9, positionnement, plan d\u2019action' },
              { icon: '⚡', name: 'Productivit\u00e9', count: '10+', examples: 'Automatisation, templates, syst\u00e8mes' },
              { icon: '🤝', name: 'Support', count: '4+', examples: 'FAQ, chatbot, onboarding client' },
            ].map((cat, i) => (
              <div key={cat.name} className={`${styles.catCard} rv d${i + 1}`}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3>{cat.name}</h3>
                <span className={styles.catCount}>{cat.count} prompts</span>
                <p>{cat.examples}</p>
              </div>
            ))}
          </div>

          <h3 className="rv" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--green)', fontWeight: 400, textAlign: 'center', margin: '4rem 0 2rem' }}>
            + 5 Workflows d&rsquo;automatisation
          </h3>
          <div className={styles.wfGrid}>
            {[
              { icon: '🚀', name: 'Machine \u00e0 Contenu', desc: 'Id\u00e9ation \u2192 r\u00e9daction \u2192 publication en 20 min' },
              { icon: '🎯', name: 'Funnel de Vente', desc: 'Page + emails + relance automatis\u00e9s' },
              { icon: '📊', name: 'Analyse Strat\u00e9gique', desc: 'Veille \u2192 insights \u2192 plan d\u2019action' },
              { icon: '⚡', name: 'Productivit\u00e9 x10', desc: 'Templates + syst\u00e8mes + automatisations' },
              { icon: '🤝', name: 'Support Client', desc: 'FAQ + r\u00e9ponses + onboarding automatis\u00e9' },
            ].map((wf, i) => (
              <div key={wf.name} className={`${styles.wfCard} rv d${i + 1}`}>
                <span className={styles.wfIcon}>{wf.icon}</span>
                <h4>{wf.name}</h4>
                <p>{wf.desc}</p>
              </div>
            ))}
          </div>
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
            <h3>Le Recycleur de Contenu</h3>
            <p>Transforme un article de blog en 10 posts LinkedIn, 5 tweets et 1 newsletter en une seule ex&eacute;cution.</p>
            <div className={styles.peekPrompt}>
              <code>Tu es un expert en content repurposing. &Agrave; partir de l&rsquo;article ci-dessous, g&eacute;n&egrave;re : 1) 10 posts LinkedIn avec hooks percutants 2) 5 tweets engageants 3) 1 newsletter compl&egrave;te. Adapte le ton &agrave; chaque plateforme...</code>
            </div>
          </div>
          <div className={`${styles.peekCard} rv d2`}>
            <h3>Le G&eacute;n&eacute;rateur de Page de Vente</h3>
            <p>Cr&eacute;e une page de vente compl&egrave;te, optimis&eacute;e conversion, &agrave; partir de 5 infos cl&eacute;s sur ton offre.</p>
            <div className={styles.peekPrompt}>
              <code>Tu es un copywriter expert en conversion. Cr&eacute;e une page de vente compl&egrave;te pour [OFFRE] en suivant la structure : Hero &rarr; Probl&egrave;me &rarr; Solution &rarr; B&eacute;n&eacute;fices &rarr; Preuves &rarr; Offre &rarr; FAQ &rarr; CTA...</code>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section style={{ padding: '6rem 3rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-tag rv">Pour qui ?</p>
          <h2 className="rv d1" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green)', fontWeight: 400, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.15 }}>
            Ce Kit est fait pour toi si&hellip;
          </h2>
          <div className={styles.whoGrid}>
            <div className={`${styles.whoCard} rv d1`}>
              <span className={styles.whoIcon}>&#128187;</span>
              <h3>Solopreneur / Freelance</h3>
              <p>Tu veux produire plus de contenu, vendre mieux et automatiser tes t&acirc;ches r&eacute;p&eacute;titives sans recruter.</p>
            </div>
            <div className={`${styles.whoCard} rv d2`}>
              <span className={styles.whoIcon}>&#127891;</span>
              <h3>Coach / Consultant</h3>
              <p>Tu veux structurer ton offre, g&eacute;n&eacute;rer des leads et d&eacute;livrer une exp&eacute;rience client premium.</p>
            </div>
            <div className={`${styles.whoCard} rv d3`}>
              <span className={styles.whoIcon}>&#127970;</span>
              <h3>Dirigeant TPE</h3>
              <p>Tu veux donner &agrave; ta petite &eacute;quipe la puissance d&rsquo;une &eacute;quipe 10x plus grande gr&acirc;ce &agrave; l&rsquo;IA.</p>
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
          <h2 className="rv">Arr&ecirc;te de deviner tes prompts.<br /><em>Utilise les miens.</em></h2>
          <p className="rv d1">50 m&eacute;ga-prompts + 5 workflows. Tout est pr&ecirc;t, il ne manque que toi.</p>
          <div className="final-price rv d2">27&euro;</div>
          <div className="final-price-old rv d2">47&euro;</div>
          <a href="https://buy.stripe.com/test_3cI5kF6T1b7jgGIfs57g401" className="btn-buy rv d3">
            T&eacute;l&eacute;charger le Kit &rarr;
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
