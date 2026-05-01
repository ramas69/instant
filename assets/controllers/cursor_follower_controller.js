import { Controller } from '@hotwired/stimulus';

/*
 * Cursor follower (DS Editorial Atelier).
 *
 * Petit cercle gold qui suit le curseur de la souris avec lag (lerp), façon
 * curseur custom éditorial. Désactivé sur touch devices et en prefers-reduced-motion.
 *
 * Usage : data-controller="cursor-follower" sur <body>.
 * Crée dynamiquement un <div class="cursor-follower"> en enfant du body.
 */
export default class CursorFollowerController extends Controller {
    connect() {
        // Pas sur touch devices (pas de souris) + respect reduced-motion
        if (
            globalThis.matchMedia?.('(pointer: coarse)').matches
            || globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        this.dot = document.createElement('div');
        this.dot.className = 'cursor-follower';
        this.dot.setAttribute('aria-hidden', 'true');
        document.body.appendChild(this.dot);

        this.targetX = 0;
        this.targetY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.active = false;

        this.boundMove = (event) => this.onMouseMove(event);
        this.boundEnter = () => this.activate();
        this.boundLeave = () => this.deactivate();

        document.addEventListener('mousemove', this.boundMove, { passive: true });
        document.addEventListener('mouseenter', this.boundEnter);
        document.addEventListener('mouseleave', this.boundLeave);

        this.tick();
    }

    disconnect() {
        document.removeEventListener('mousemove', this.boundMove);
        document.removeEventListener('mouseenter', this.boundEnter);
        document.removeEventListener('mouseleave', this.boundLeave);
        if (this.dot && this.dot.parentNode) {
            this.dot.parentNode.removeChild(this.dot);
        }
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
    }

    onMouseMove(event) {
        this.targetX = event.clientX;
        this.targetY = event.clientY;
        if (!this.active) {
            this.activate();
        }
    }

    activate() {
        this.active = true;
        this.dot.classList.add('is-visible');
    }

    deactivate() {
        this.active = false;
        this.dot.classList.remove('is-visible');
    }

    tick() {
        // Lerp lissé : 18% du delta par frame → traîne fluide
        this.currentX += (this.targetX - this.currentX) * 0.18;
        this.currentY += (this.targetY - this.currentY) * 0.18;
        this.dot.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;
        this.rafId = requestAnimationFrame(() => this.tick());
    }
}
