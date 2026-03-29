import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FaqAccordion from '@/components/FaqAccordion'
import HomepageNav from '@/components/HomepageNav'
import CounterAnimation from '@/components/CounterAnimation'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Instant IA — Formations, Ateliers & Consulting IA',
  description: "Transforme ton business avec l'IA. Formations, ateliers live, ebooks et accompagnement sur-mesure par Rama — experte IA, formatrice et cofondatrice.",
}

const faqItems = [
  { question: "J'y connais rien en tech, c'est pour moi ?", answer: "Absolument. Si tu sais utiliser un navigateur web, tu peux suivre mes formations. Je vulgarise tout, j'explique chaque étape, et on avance ensemble. Pas besoin de coder." },
  { question: "C'est en ligne ou en présentiel ?", answer: "Principalement en ligne (visio) pour que tu puisses participer où que tu sois. Pour les entreprises, le présentiel est possible sur demande — on en discute." },
  { question: "Comment je récupère mes ebooks après achat ?", answer: "Tu reçois un accès immédiat après paiement. Tu es redirigé vers une page de téléchargement + tu reçois un email de confirmation. Tu peux re-télécharger à tout moment." },
  { question: "Je peux former toute mon équipe ?", answer: "Bien sûr ! Je propose des formats pensés pour les équipes avec exercices collaboratifs et contenu adapté à ton secteur. Écris-moi et on construit le programme ensemble." },
  { question: "Comment se passe l'audit ?", answer: "Tu m'envoies un email, on échange sur ta situation, et je lance l'analyse de tes process. Tu reçois un rapport complet avec les opportunités IA et un plan d'action priorisé. L'audit peut se faire seul ou mener au consulting — zéro engagement." },
]

const marqueeItems = ['ChatGPT', 'Claude', 'Midjourney', 'Make', 'Zapier', 'Prompt Engineering', 'Automatisation', 'No-Code', 'Agents IA', 'Strategie IA']

export default function HomePage() {
  return (
    <>
      <Nav variant="homepage" links={[
        { href: '#boutique', label: 'Boutique' },
        { href: '#offres', label: 'Accompagnement' },
        { href: '#rama', label: 'A propos' },
        { href: 'mailto:hello@instant-ia.com', label: 'Contactez-moi', isCta: true },
      ]} />
      <HomepageNav />
      <ScrollReveal />
      <CounterAnimation />

      {/* HERO */}
      <section className={`hero ${styles.hero}`} id="top">
        <div className="hero-bg" />
        <div className={`blob blob-1 ${styles.blob1}`} />
        <div className={`blob blob-2 ${styles.blob2}`} />
        <div className={styles.heroNumber}>IA</div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroHeadline} rv`}>
            Ceux qui n&apos;utilisent pas<br />
            l&apos;IA aujourd&apos;hui seront<br />
            <em>d&eacute;pass&eacute;s demain.</em>
          </h1>
          <p className={`${styles.heroSub} rv d1`}>
            Je t&apos;aide &agrave; transformer ton business avec l&apos;IA. Formations, ateliers live, ebooks et accompagnement — que du concret, z&eacute;ro blabla.
          </p>
          <div className={`${styles.heroActions} rv d2`}>
            <a href="#lead" className="btn-hero btn-primary">Commence ici — c&apos;est gratuit &rarr;</a>
            <a href="mailto:hello@instant-ia.com" className="btn-hero btn-ghost">Me contacter</a>
          </div>
          <div className={`hero-bottom ${styles.heroBottom} rv d3`}>
            <div>
              <div className={styles.heroStatNum} id="s1">0</div>
              <div className={styles.heroStatLabel}>Professionnels accompagn&eacute;s</div>
            </div>
            <div>
              <div className={styles.heroStatNum} id="s2">0</div>
              <div className={styles.heroStatLabel}>Satisfaction</div>
            </div>
            <div>
              <div className={styles.heroStatNum} id="s3">0</div>
              <div className={styles.heroStatLabel}>Heures de formation</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>{item}</span>
          ))}
        </div>
      </div>

      {/* INTRO EDITORIAL */}
      <div className={styles.intro}>
        <div className={`${styles.introLeft} rv-l`}>
          <div className={styles.introTag}>Ma philosophie</div>
          <h2>J&apos;ai horreur du blabla.<br />Ici, c&apos;est <em>100% action</em><br />ou rien.</h2>
        </div>
        <div className={`${styles.introRight} rv-r`}>
          <p>Tu es solopreneur, coach, dirigeant de PME ? Tu sais que l&apos;IA peut tout changer, mais tu ne sais pas par o&ugrave; commencer. C&apos;est exactement l&agrave; que j&apos;interviens.</p>
          <p>Mes formations, c&apos;est pas des slides pendant 3h. C&apos;est toi qui mets les mains dedans, qui construit tes premiers agents, tes automatisations, tes prompts — et qui repart avec des r&eacute;sultats concrets d&egrave;s le lendemain.</p>
        </div>
      </div>

      {/* LEAD MAGNET */}
      <section className={styles.leadSection} id="lead">
        <div className={`${styles.leadCard} rv`}>
          <div className={styles.leadBlob} />
          <div className={styles.leadEmoji}>🎁</div>
          <div className={styles.leadContent}>
            <div className={styles.leadTag}>Gratuit — Lead magnet</div>
            <h3 className={styles.leadTitle}>3 Agents IA du Solopreneur</h3>
            <p className={styles.leadDesc}>3 agents pr&ecirc;ts &agrave; l&apos;emploi pour automatiser ton contenu, tes emails et ta veille. T&eacute;l&eacute;charge-les gratuitement et d&eacute;couvre ce que l&apos;IA peut faire pour ton business en 10 minutes.</p>
          </div>
          <Link href="/lead-magnet" className={styles.leadCta}>T&eacute;l&eacute;charger gratuitement &rarr;</Link>
        </div>
      </section>

      {/* BOUTIQUE */}
      <section className={styles.shopSection} id="boutique">
        <div className={`${styles.shopHeader} rv`}>
          <div className="section-tag">Boutique</div>
          <h2>Passe &agrave; l&apos;action <em>&agrave; ton rythme</em></h2>
          <p>Ebooks, templates, prompts — tout ce qu&apos;il te faut pour aller plus loin avec l&apos;IA. Tu t&eacute;l&eacute;charges, tu appliques, tu vois les r&eacute;sultats.</p>
        </div>
        <div className={styles.shopGrid}>
          {/* Kit IA Solopreneur */}
          <div className="shop-card rv">
            <div className="shop-card-top">
              <span className="shop-badge badge-best">Best-seller</span>
              <div className="shop-card-icon sci-1">
                <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4.5 13.5H11.5L10.5 22L19.5 10.5H12.5L13 2Z" fill="#D4AF37" /></svg>
              </div>
              <Link href="/kit-ia" style={{ textDecoration: 'none' }}><h3>Le Kit IA du Solopreneur</h3></Link>
              <p className="shop-desc">50 m&eacute;ga-prompts Claude + 5 workflows d&apos;automatisation. Le kit complet pour les solopreneurs qui veulent scaler sans recruter.</p>
            </div>
            <div className="shop-card-features">
              <div className="shop-feat">50 prompts pro test&eacute;s (contenu, vente, strat&eacute;gie, productivit&eacute;, support)</div>
              <div className="shop-feat">5 workflows d&apos;automatisation pr&ecirc;ts &agrave; copier-coller</div>
              <div className="shop-feat">Combos de prompts pr&eacute;-configur&eacute;s</div>
              <div className="shop-feat">70 pages de contenu actionnable</div>
            </div>
            <div className="shop-card-bottom">
              <div className="shop-price"><span className="amount">27</span><span className="currency">&euro;</span></div>
              <div className={styles.shopBtnWrap}>
                <Link href="/kit-ia" className="btn-shop dl">D&eacute;tails</Link>
                <a href="https://buy.stripe.com/28E8wPczv2W8h0A3cOdIA01" className="btn-shop buy">Acheter &rarr;</a>
              </div>
            </div>
          </div>

          {/* Guide Agents IA */}
          <div className="shop-card rv d1">
            <div className="shop-card-top">
              <span className="shop-badge badge-new">Nouveau</span>
              <div className="shop-card-icon sci-2">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#fff" strokeWidth="1.5" fill="none" /><circle cx="9" cy="10" r="1.5" fill="#fff" /><circle cx="15" cy="10" r="1.5" fill="#fff" /><path d="M9 15c0 0 1.5 2 3 2s3-2 3-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
              </div>
              <Link href="/guide-agents-ia" style={{ textDecoration: 'none' }}><h3>Guide Pratique des Agents IA</h3></Link>
              <p className="shop-desc">Comprends, cr&eacute;e et d&eacute;ploie tes propres agents IA. Le guide pour passer du prompt unique &agrave; l&apos;automatisation intelligente.</p>
            </div>
            <div className="shop-card-features">
              <div className="shop-feat">Architecture et logique des agents IA expliqu&eacute;es simplement</div>
              <div className="shop-feat">Tutoriels pas-&agrave;-pas pour cr&eacute;er tes agents</div>
              <div className="shop-feat">Cas d&apos;usage concrets par m&eacute;tier</div>
              <div className="shop-feat">5 templates d&apos;agents pr&ecirc;ts &agrave; l&apos;emploi</div>
              <div className={`shop-feat ${styles.bonusFeat}`}>🎁 + Bonus Notion offert (framework RACE, checklists, plan 30j)</div>
              <Link href="/templates" className={styles.bonusLink}>Voir un aper&ccedil;u du bonus &rarr;</Link>
            </div>
            <div className="shop-card-bottom">
              <div className="shop-price">
                <span className="amount">29</span><span className="currency">&euro;</span>
                <span className={styles.oldPrice}>49&euro;</span>
              </div>
              <div className={styles.shopBtnWrap}>
                <Link href="/guide-agents-ia" className="btn-shop dl">D&eacute;tails</Link>
                <a href="https://buy.stripe.com/dRm00j42ZbsEcKkcNodIA02" className="btn-shop buy">Acheter &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STRIP */}
      <section className={styles.whyStrip} id="methode">
        <div className={styles.whyBig}>
          Gagner du temps &middot; Booster son CA &middot; Automatiser &middot; Scaler sans recruter &middot; Innover &middot; Se d&eacute;marquer &middot;{' '}
          Gagner du temps &middot; Booster son CA &middot; Automatiser &middot; Scaler sans recruter &middot; Innover &middot; Se d&eacute;marquer &middot;
        </div>
        <div className={styles.whyGrid}>
          <div className={`${styles.whyCard} rv`}>
            <div className={styles.whyNum}>01</div>
            <h3>Gagne du temps</h3>
            <p>Automatise les t&acirc;ches qui te bouffent tes journ&eacute;es. Concentre-toi enfin sur ce qui g&eacute;n&egrave;re de la valeur.</p>
          </div>
          <div className={`${styles.whyCard} rv d1`}>
            <div className={styles.whyNum}>02</div>
            <h3>Booste ton CA</h3>
            <p>Plus de contenu, plus de clients, mieux convertis — l&apos;IA est ton meilleur commercial, et il bosse 24/7.</p>
          </div>
          <div className={`${styles.whyCard} rv d2`}>
            <div className={styles.whyNum}>03</div>
            <h3>Ne te fais pas d&eacute;passer</h3>
            <p>Tes concurrents utilisent d&eacute;j&agrave; l&apos;IA. Chaque jour sans, c&apos;est du terrain perdu. La bonne nouvelle : il n&apos;est pas trop tard.</p>
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section className={styles.consultingSection} id="offres">
        <div className={`${styles.consultingHeader} rv`}>
          <div className="section-tag">Accompagnement sur-mesure</div>
          <h2>Tu veux aller plus loin ?<br />On optimise ton business <em>ensemble.</em></h2>
        </div>

        <div className={styles.consultingGrid}>
          {/* Audit */}
          <div className={`${styles.auditCard} rv`}>
            <div className={styles.cardBlob} />
            <div className={styles.cardInner}>
              <div className={styles.stepBadgeDark}>&Eacute;tape 1</div>
              <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
                <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#D4AF37" strokeWidth="1.5" fill="none" /><path d="M16.5 16.5L21 21" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 11h6M11 8v6" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" /></svg>
              </div>
              <h3>Audit IA de<br />ton business</h3>
              <p>J&apos;analyse tes process, tes outils, ton workflow actuel — et je te montre exactement o&ugrave; l&apos;IA peut te faire gagner du temps, de l&apos;argent et de l&apos;&eacute;nergie.</p>
              <div className={styles.tagsDark}>
                <span>Analyse des process</span>
                <span>Opportunit&eacute;s IA</span>
                <span>Plan d&apos;action</span>
                <span>ROI estim&eacute;</span>
              </div>
            </div>
            <div className={styles.deliverable}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="var(--gold-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Livrable : rapport d&apos;audit complet + recommandations prioris&eacute;es</span>
            </div>
            <div className={styles.cardFooter}>
              <div>
                <div className={styles.priceDark}>497<span>&euro; HT</span></div>
                <div className={styles.priceMeta}>Dur&eacute;e : 1 &agrave; 2 jours</div>
              </div>
              <a href="mailto:hello@instant-ia.com" className={styles.auditCta}>R&eacute;server mon audit &rarr;</a>
            </div>
          </div>

          {/* Consulting */}
          <div className={`${styles.consultCard} rv d1`}>
            <div>
              <div className={styles.stepBadgeLight}>&Eacute;tape 2</div>
              <div className={`${styles.cardIcon} ${styles.cardIconPale}`}>
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="#C5A044" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#C5A044" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <h3>Consulting &amp;<br /><em>mise en place</em></h3>
              <p>On passe &agrave; l&apos;action. Je construis et d&eacute;ploie tes automatisations, tes agents IA, tes workflows — et je te forme pour que tu sois autonome. Comme une cofondatrice tech &agrave; tes c&ocirc;t&eacute;s.</p>
              <div className={styles.tagsLight}>
                <span>Automatisations</span>
                <span>Agents IA</span>
                <span>Strat&eacute;gie IA</span>
                <span>Suivi 1:1</span>
              </div>
            </div>
            <div className={styles.consultFooter}>
              <div>
                <div className={styles.priceLight}>
                  <span className={styles.priceLightPrefix}>&Agrave; partir de </span>
                  <span className={styles.priceLightAmount}>1 500<span>&euro; HT</span></span>
                </div>
                <div className={styles.priceMetaLight}>Selon le scope du projet</div>
              </div>
              <a href="mailto:hello@instant-ia.com" className="btn-card">On en parle ? &rarr;</a>
            </div>
          </div>
        </div>

        {/* Deduction mention */}
        <div className={`${styles.deductionMention} rv d2`}>
          <div className={styles.deductionBadge}>
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#C5A044" /></svg>
            <span>Le montant de l&apos;audit est d&eacute;duit si tu passes au consulting dans les 30 jours.</span>
          </div>
          <p className={styles.deductionText}>L&apos;audit peut se faire seul ou mener au consulting. Dans tous les cas, tu repars avec un plan d&apos;action clair — m&ecirc;me si tu ne travailles jamais avec moi.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about} id="rama">
        <div className={styles.aboutLeft}>
          <span className={styles.aboutLetter}>R</span>
          <div className={styles.aboutNameTag}>
            <h3>Rama</h3>
            <p>Formatrice &amp; Cofondatrice IA</p>
          </div>
        </div>
        <div className={styles.aboutRight}>
          <div className="section-tag rv-r">Qui je suis</div>
          <h2 className="rv-r">Je ne fais pas que former.<br />Je construis, je teste, <em>je d&eacute;ploie.</em></h2>
          <p className="rv-r">Formatrice, experte technique, strat&egrave;ge business — je porte toutes ces casquettes parce que je crois qu&apos;on ne peut pas enseigner ce qu&apos;on ne pratique pas. Chaque jour, j&apos;utilise l&apos;IA pour mon propre business.</p>
          <p className="rv-r">Ce que je t&apos;enseigne, je l&apos;applique d&apos;abord sur mes propres projets. Chaque outil, chaque prompt, chaque automatisation que je te montre — je l&apos;ai test&eacute;e et d&eacute;ploy&eacute;e dans la vraie vie.</p>
          <p className="rv-r">Mon approche : z&eacute;ro blabla, que de l&apos;actionnable. Tu repars de chaque formation, chaque atelier, chaque accompagnement avec des comp&eacute;tences que tu appliques d&egrave;s le lendemain.</p>
          <div className={`${styles.aboutTags} rv-r`}>
            <span>ChatGPT &amp; Claude</span>
            <span>Automatisation</span>
            <span>Prompt Engineering</span>
            <span>Agents IA</span>
            <span>Strat&eacute;gie IA</span>
            <span>No-Code</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testiSection} id="temoignages">
        <div className={`${styles.sectionHeader} rv`}>
          <h2>Ils sont pass&eacute;s &agrave; l&apos;action.<br />Voil&agrave; ce que <em>&ccedil;a a chang&eacute;.</em></h2>
          <div className="section-tag">T&eacute;moignages</div>
        </div>
        <div className={styles.testiGrid}>
          <div className={`${styles.testiCard} rv`}>
            <div className={styles.testiStars}>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <blockquote>&ldquo;Gr&acirc;ce &agrave; Rama, j&apos;ai automatis&eacute; 80% de ma cr&eacute;ation de contenu. Je gagne 15h par semaine. Honn&ecirc;tement, c&apos;est le meilleur investissement que j&apos;ai fait cette ann&eacute;e.&rdquo;</blockquote>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>S</div>
              <div>
                <div className={styles.testiName}>Sophie M.</div>
                <div className={styles.testiRole}>Coach business</div>
              </div>
            </div>
          </div>
          <div className={`${styles.testiCard} rv d1`}>
            <div className={styles.testiStars}>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <blockquote>&ldquo;L&apos;atelier prompt engineering m&apos;a ouvert les yeux. En 3h j&apos;ai pig&eacute; ce que des mois de bidouillage tout seul ne m&apos;avaient jamais appris. Rama explique les choses simplement.&rdquo;</blockquote>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>K</div>
              <div>
                <div className={styles.testiName}>Karim D.</div>
                <div className={styles.testiRole}>Fondateur e-commerce</div>
              </div>
            </div>
          </div>
          <div className={`${styles.testiCard} rv d2`}>
            <div className={styles.testiStars}>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <blockquote>&ldquo;On a boss&eacute; ensemble sur la strat&eacute;gie IA de notre agence. ROI visible d&egrave;s le premier mois. Rama ne fait pas que conseiller — elle met les mains dedans avec toi.&rdquo;</blockquote>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>L</div>
              <div>
                <div className={styles.testiName}>Laura P.</div>
                <div className={styles.testiRole}>Directrice agence marketing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion items={faqItems} />

      {/* CTA */}
      <section className={styles.cta} id="contact">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className={styles.ctaInner}>
          <h2 className="rv">Pr&ecirc;te &agrave; transformer<br />ton business avec <em>l&apos;IA</em> ?</h2>
          <p className={`${styles.ctaText} rv`}>&Eacute;cris-moi, dis-moi o&ugrave; tu en es et ce que tu veux accomplir. Je te r&eacute;ponds personnellement sous 24h.</p>
          <a href="mailto:hello@instant-ia.com" className={`btn-hero btn-primary ${styles.ctaBtn} rv`}>Contactez-moi &rarr;</a>
          <div className={`${styles.ctaTrust} rv`}>
            <span>&#10003; R&eacute;ponse sous 24h</span>
            <span>&#10003; Z&eacute;ro engagement</span>
            <span>&#10003; Conseil personnalis&eacute;</span>
          </div>
        </div>
      </section>

      <Footer links={[
        { href: '/#offres', label: 'Accompagnement' },
        { href: '/#boutique', label: 'Boutique' },
        { href: '/#rama', label: 'A propos' },
        { href: 'https://www.linkedin.com/in/rama-soumar%C3%A9-aa5131a0/', label: 'LinkedIn', external: true },
        { href: 'https://www.instagram.com/rama__soumare/?hl=fr', label: 'Instagram', external: true },
        { href: 'mailto:hello@instant-ia.com', label: 'Contact' },
      ]} />
    </>
  )
}
