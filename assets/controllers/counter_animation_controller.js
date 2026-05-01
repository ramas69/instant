import { Controller } from '@hotwired/stimulus';

/*
 * Counter animation Stimulus controller.
 *
 * Anime un nombre de 0 vers une valeur cible avec easing easeOutCubic, déclenché
 * quand l'élément entre dans le viewport. Idéal pour les stats du hero
 * ("X élèves accompagnés", "Y heures de formation", etc.).
 *
 * Usage Twig :
 *   <span data-controller="counter-animation"
 *         data-counter-animation-target-value="847"
 *         data-counter-animation-duration-value="1500"
 *         data-counter-animation-suffix-value="+">0</span>
 */
export default class extends Controller {
    static values = {
        target: Number,
        duration: { type: Number, default: 1500 },
        suffix: { type: String, default: '' },
    };

    connect() {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.element.textContent = this.formatNumber(this.targetValue) + this.suffixValue;
            return;
        }

        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.animate();
                    this.observer.unobserve(this.element);
                }
            },
            { threshold: 0.5 },
        );
        this.observer.observe(this.element);
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    animate() {
        const start = performance.now();
        const target = this.targetValue;
        const duration = this.durationValue;
        const suffix = this.suffixValue;

        const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Easing easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            this.element.textContent = this.formatNumber(current) + suffix;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    }

    formatNumber(n) {
        return n.toLocaleString('fr-FR');
    }
}
