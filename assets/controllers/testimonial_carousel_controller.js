import { Controller } from '@hotwired/stimulus';

/*
 * Testimonial carousel — fade transition entre 1 slide visible à la fois.
 *
 * Navigation : flèches prev/next (boutons avec data-action),
 * support clavier (←/→) quand le focus est dans le carrousel,
 * support tactile (swipe) sur mobile.
 *
 * Transition : fade 400ms ease-out (cubic-bezier(0.23, 1, 0.32, 1)).
 * Désactivée en prefers-reduced-motion.
 *
 * Usage Twig :
 *   <div data-controller="testimonial-carousel">
 *     <button data-action="click->testimonial-carousel#prev">←</button>
 *     <button data-action="click->testimonial-carousel#next">→</button>
 *     <div data-testimonial-carousel-target="slide" data-index="0" class="is-active">…</div>
 *     <div data-testimonial-carousel-target="slide" data-index="1">…</div>
 *     <div data-testimonial-carousel-target="slide" data-index="2">…</div>
 *   </div>
 */
export default class TestimonialCarouselController extends Controller {
    static targets = ['slide'];
    static values = {
        current: { type: Number, default: 0 },
    };

    connect() {
        this.touchStartX = null;
        this.touchEndX = null;
        this._onKey = this.onKey.bind(this);
        this._onTouchStart = this.onTouchStart.bind(this);
        this._onTouchEnd = this.onTouchEnd.bind(this);

        this.element.addEventListener('keydown', this._onKey);
        this.element.addEventListener('touchstart', this._onTouchStart, { passive: true });
        this.element.addEventListener('touchend', this._onTouchEnd, { passive: true });

        this.render();
    }

    disconnect() {
        this.element.removeEventListener('keydown', this._onKey);
        this.element.removeEventListener('touchstart', this._onTouchStart);
        this.element.removeEventListener('touchend', this._onTouchEnd);
    }

    next() {
        this.currentValue = (this.currentValue + 1) % this.slideTargets.length;
    }

    prev() {
        this.currentValue =
            (this.currentValue - 1 + this.slideTargets.length) % this.slideTargets.length;
    }

    goTo(event) {
        const index = parseInt(event.currentTarget.dataset.index, 10);
        if (!Number.isNaN(index)) {
            this.currentValue = index;
        }
    }

    currentValueChanged() {
        this.render();
    }

    render() {
        if (!this.hasSlideTarget) return;
        this.slideTargets.forEach((slide, i) => {
            const isActive = i === this.currentValue;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });
    }

    onKey(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.prev();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.next();
        }
    }

    onTouchStart(event) {
        this.touchStartX = event.changedTouches[0].screenX;
    }

    onTouchEnd(event) {
        this.touchEndX = event.changedTouches[0].screenX;
        const delta = this.touchEndX - this.touchStartX;
        const threshold = 50;
        if (delta > threshold) this.prev();
        else if (delta < -threshold) this.next();
    }
}
