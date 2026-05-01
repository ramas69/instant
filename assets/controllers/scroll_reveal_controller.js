import { Controller } from '@hotwired/stimulus';

/*
 * Scroll-reveal Stimulus controller.
 *
 * Supporte 2 conventions :
 *   - Système legacy `.rv` / `.rv-l` / `.rv-r` + `.vis` + délais `.d1..d5`
 *   - Système DS Editorial Atelier `.reveal` / `.reveal-left` / `.reveal-right`
 *     + `.in` + délais `.delay-1..delay-5` + `.rule-draw` + `.split[data-split]`
 */
export default class ScrollRevealController extends Controller {
    static values = {
        threshold: { type: Number, default: 0.18 },
        rootMargin: { type: String, default: '0px 0px -50px 0px' },
        once: { type: Boolean, default: true },
    };

    connect() {
        // Préférence accessibilité — révèle tout immédiatement
        if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            const all = '.rv, .rv-l, .rv-r, .reveal, .reveal-left, .reveal-right, .rule-draw, .split';
            this.element.querySelectorAll(all).forEach((el) => {
                el.classList.add('vis', 'in');
            });
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('vis', 'in');
                        if (this.onceValue) {
                            this.observer.unobserve(entry.target);
                        }
                    } else if (!this.onceValue) {
                        entry.target.classList.remove('vis', 'in');
                    }
                });
            },
            {
                threshold: this.thresholdValue,
                rootMargin: this.rootMarginValue,
            },
        );

        const targets = '.rv, .rv-l, .rv-r, .reveal, .reveal-left, .reveal-right, .rule-draw, .split';
        this.element.querySelectorAll(targets).forEach((el) => {
            this.observer.observe(el);
        });
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
