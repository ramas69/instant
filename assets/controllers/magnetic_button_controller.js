import { Controller } from '@hotwired/stimulus';

/*
 * Magnetic button (DS Editorial Atelier).
 *
 * Le bouton attire légèrement le curseur quand on s'approche à <80px.
 * Effet subtil mais perceptible — donne du caractère aux CTAs principaux.
 *
 * Usage : data-controller="magnetic-button" sur les CTAs gold importants.
 * Désactivé sur touch + reduced-motion.
 */
export default class MagneticButtonController extends Controller {
    static values = {
        strength: { type: Number, default: 0.35 },
        radius: { type: Number, default: 80 },
    };

    connect() {
        if (
            globalThis.matchMedia?.('(pointer: coarse)').matches
            || globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        this.boundMove = (event) => this.onMove(event);
        this.boundLeave = () => this.reset();
        this.element.addEventListener('mousemove', this.boundMove);
        this.element.addEventListener('mouseleave', this.boundLeave);
        this.element.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
    }

    disconnect() {
        if (this.boundMove) {
            this.element.removeEventListener('mousemove', this.boundMove);
            this.element.removeEventListener('mouseleave', this.boundLeave);
        }
    }

    onMove(event) {
        const rect = this.element.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = event.clientX - cx;
        const dy = event.clientY - cy;
        const distance = Math.hypot(dx, dy);

        if (distance > this.radiusValue + Math.max(rect.width, rect.height) / 2) {
            this.reset();
            return;
        }

        const tx = dx * this.strengthValue;
        const ty = dy * this.strengthValue;
        this.element.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    }

    reset() {
        this.element.style.transform = 'translate3d(0, 0, 0)';
    }
}
