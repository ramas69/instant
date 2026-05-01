import { Controller } from '@hotwired/stimulus';

/*
 * Hero scroll-driving controller (DS Editorial Atelier).
 *
 * Le hero a `height: 200vh` avec un `.hero-sticky-inner position: sticky`.
 * Au scroll de 0 à 200vh, on anime :
 *   - le contenu (translate up + scale down + opacity fade)
 *   - le scroll-cue (fade rapide)
 *   - le glow radial (drift + scale)
 *
 * Usage Twig :
 *   <section class="hero-sticky" data-controller="hero-scroll">
 *     <div class="hero-sticky-inner">
 *       <div class="hero-glow" data-hero-scroll-target="glow"></div>
 *       <div class="hero-content-driven" data-hero-scroll-target="content">…</div>
 *       <div class="scroll-cue" data-hero-scroll-target="cue">…</div>
 *     </div>
 *   </section>
 */
export default class HeroScrollController extends Controller {
    static targets = ['content', 'cue', 'glow'];

    connect() {
        if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        this.boundAnimate = () => this.animate();
        globalThis.addEventListener('scroll', this.boundAnimate, { passive: true });
        this.animate();
    }

    disconnect() {
        if (this.boundAnimate) {
            globalThis.removeEventListener('scroll', this.boundAnimate);
        }
    }

    animate() {
        const rect = this.element.getBoundingClientRect();
        const total = this.element.offsetHeight - globalThis.innerHeight;
        if (total <= 0) {
            return;
        }
        const scrolled = Math.max(0, -rect.top);
        const t = Math.min(1, scrolled / total); // 0 → 1

        if (this.hasContentTarget) {
            const ty = -t * 80;
            const sc = 1 - t * 0.18;
            const op = Math.max(0, 1 - t * 1.2);
            this.contentTarget.style.setProperty('--ty', ty + 'px');
            this.contentTarget.style.setProperty('--sc', sc.toString());
            this.contentTarget.style.setProperty('--op', op.toString());
        }

        if (this.hasCueTarget) {
            this.cueTarget.style.setProperty('--cue', Math.max(0, 1 - t * 4).toString());
        }

        if (this.hasGlowTarget) {
            const tx = -t * 200;
            const ty2 = t * 150;
            const scale = 1 + t * 0.5;
            this.glowTarget.style.transform = `translate(${tx}px, ${ty2}px) scale(${scale})`;
        }
    }
}
