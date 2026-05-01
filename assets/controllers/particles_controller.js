import { Controller } from '@hotwired/stimulus';

/*
 * Particles background (DS Editorial Atelier).
 *
 * Crée N petits points gold qui flottent lentement en arrière-plan d'un container
 * (typiquement le hero). Animation CSS pure une fois les particles créées (transitions),
 * minimal cost.
 *
 * Usage :
 *   <section class="hero-sticky" data-controller="particles" data-particles-count-value="14">
 *
 * Désactivé en prefers-reduced-motion.
 */
export default class ParticlesController extends Controller {
    static values = {
        count: { type: Number, default: 12 },
    };

    connect() {
        if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        // Conteneur des particles
        this.layer = document.createElement('div');
        this.layer.className = 'particles-layer';
        this.layer.setAttribute('aria-hidden', 'true');
        this.element.appendChild(this.layer);

        for (let i = 0; i < this.countValue; i++) {
            const p = document.createElement('span');
            p.className = 'particle';
            // Position et délai aléatoires pour répartir l'animation
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.animationDuration = `${10 + Math.random() * 18}s`;
            p.style.animationDelay = `${-Math.random() * 20}s`;
            p.style.opacity = (0.3 + Math.random() * 0.4).toString();
            p.style.transform = `scale(${0.5 + Math.random() * 1})`;
            this.layer.appendChild(p);
        }
    }

    disconnect() {
        if (this.layer && this.layer.parentNode) {
            this.layer.parentNode.removeChild(this.layer);
        }
    }
}
