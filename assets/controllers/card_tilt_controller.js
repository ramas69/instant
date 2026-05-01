import { Controller } from '@hotwired/stimulus';

/*
 * Card 3D tilt (DS Editorial Atelier).
 *
 * La carte bascule légèrement en perspective 3D selon la position du curseur
 * (effet "carte qui répond à ton regard"). Désactivé sur touch + reduced-motion.
 *
 * Usage : data-controller="card-tilt" sur les cards (offer-card-ds, testimonial-card, etc.)
 *
 * Tilt max ±8deg — assez pour donner du relief, pas trop pour ne pas distraire.
 */
export default class CardTiltController extends Controller {
    static values = {
        max: { type: Number, default: 8 },
    };

    connect() {
        if (
            globalThis.matchMedia?.('(pointer: coarse)').matches
            || globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        this.element.style.transformStyle = 'preserve-3d';
        this.element.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';

        this.boundMove = (event) => this.onMove(event);
        this.boundLeave = () => this.reset();
        this.element.addEventListener('mousemove', this.boundMove);
        this.element.addEventListener('mouseleave', this.boundLeave);
    }

    disconnect() {
        if (this.boundMove) {
            this.element.removeEventListener('mousemove', this.boundMove);
            this.element.removeEventListener('mouseleave', this.boundLeave);
        }
    }

    onMove(event) {
        const rect = this.element.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;  // 0 → 1
        const py = (event.clientY - rect.top) / rect.height;  // 0 → 1
        const rx = (py - 0.5) * -2 * this.maxValue;
        const ry = (px - 0.5) * 2 * this.maxValue;

        // Préserve le translateY existant (parallax-element peut l'avoir set via --py)
        const py2 = getComputedStyle(this.element).getPropertyValue('--py') || '0px';
        this.element.style.transform = `perspective(900px) translateY(${py2}) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    }

    reset() {
        const py2 = getComputedStyle(this.element).getPropertyValue('--py') || '0px';
        this.element.style.transform = `perspective(900px) translateY(${py2}) rotateX(0deg) rotateY(0deg) scale(1)`;
    }
}
