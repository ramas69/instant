import { Controller } from '@hotwired/stimulus';

/*
 * Parallax element controller (DS Editorial Atelier).
 *
 * Décale verticalement l'élément selon sa position dans le viewport,
 * proportionnellement à la `strength` configurée. Crée un effet de profondeur
 * subtile (cards qui flottent à des vitesses différentes au scroll).
 *
 * Usage Twig :
 *   <article class="offer-card-ds parallax"
 *            data-controller="parallax-element"
 *            data-parallax-element-strength-value="-30">…</article>
 *
 * `strength` négatif = monte plus lentement que le scroll (effet "remonte")
 * `strength` positif = descend plus rapidement que le scroll
 */
export default class ParallaxElementController extends Controller {
    static values = {
        strength: { type: Number, default: 0 },
    };

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
        const vh = globalThis.innerHeight;
        const center = rect.top + rect.height / 2;
        const progress = (center - vh / 2) / vh; // -1 → +1 sur la hauteur viewport
        const py = progress * this.strengthValue;
        this.element.style.setProperty('--py', py + 'px');
    }
}
