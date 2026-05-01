import { Controller } from '@hotwired/stimulus';

/*
 * Scroll-reveal Stimulus controller.
 *
 * Porte le ScrollReveal du legacy Next.js (IntersectionObserver) vers Stimulus.
 * Observe tous les enfants .rv / .rv-l / .rv-r dans le scope du controller
 * et leur ajoute la classe `.vis` quand ils entrent dans le viewport.
 *
 * Usage Twig :
 *   <main data-controller="scroll-reveal">
 *     <h1 class="rv">Titre qui apparaît en fade up</h1>
 *     <p class="rv-l d1">Paragraphe qui glisse depuis la gauche avec délai</p>
 *   </main>
 */
export default class extends Controller {
    static values = {
        threshold: { type: Number, default: 0.08 },
        rootMargin: { type: String, default: '0px 0px -40px 0px' },
        once: { type: Boolean, default: true },
    };

    connect() {
        // Respecte la préférence utilisateur de réduction de mouvement
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.element.querySelectorAll('.rv, .rv-l, .rv-r').forEach((el) => {
                el.classList.add('vis');
            });
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('vis');
                        if (this.onceValue) {
                            this.observer.unobserve(entry.target);
                        }
                    } else if (!this.onceValue) {
                        entry.target.classList.remove('vis');
                    }
                });
            },
            {
                threshold: this.thresholdValue,
                rootMargin: this.rootMarginValue,
            },
        );

        this.element.querySelectorAll('.rv, .rv-l, .rv-r').forEach((el) => {
            this.observer.observe(el);
        });
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
