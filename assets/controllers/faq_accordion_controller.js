import { Controller } from '@hotwired/stimulus';

/*
 * FAQ accordion Stimulus controller.
 *
 * Ouvre/ferme les items de FAQ. Permet une seule réponse ouverte à la fois
 * si data-faq-accordion-exclusive-value="true".
 *
 * Usage Twig :
 *   <div class="faq-list" data-controller="faq-accordion"
 *        data-faq-accordion-exclusive-value="true">
 *     <div class="faq-item" data-faq-accordion-target="item">
 *       <button class="faq-question" data-action="click->faq-accordion#toggle">
 *         Question ?
 *       </button>
 *       <div class="faq-answer">Réponse...</div>
 *     </div>
 *   </div>
 */
export default class extends Controller {
    static targets = ['item'];
    static values = {
        exclusive: { type: Boolean, default: true },
    };

    toggle(event) {
        event.preventDefault();
        const item = event.currentTarget.closest('.faq-item');
        if (!item) {
            return;
        }

        const isOpen = item.classList.contains('open');

        if (this.exclusiveValue) {
            this.itemTargets.forEach((other) => other.classList.remove('open'));
        }

        if (!isOpen) {
            item.classList.add('open');
        } else {
            item.classList.remove('open');
        }
    }
}
