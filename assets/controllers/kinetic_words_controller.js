import { Controller } from '@hotwired/stimulus';

/*
 * Kinetic words controller (DS Editorial Atelier — style Relancya).
 *
 * Rotation cyclique de mots qui apparaissent (slide-up + fade-in) et disparaissent
 * (slide-up + fade-out), avec 1 mot visible à la fois dans un slot fixe.
 *
 * Usage Twig :
 *   <span class="kinetic-word-slot" data-controller="kinetic-words" data-kinetic-words-interval-value="3000">
 *     <span class="kinetic-word-item is-active" data-kinetic-words-target="word">écrit</span>
 *     <span class="kinetic-word-item" data-kinetic-words-target="word">envoie</span>
 *     <span class="kinetic-word-item" data-kinetic-words-target="word">synthétise</span>
 *     <span class="kinetic-word-item" data-kinetic-words-target="word">résume</span>
 *   </span>
 */
export default class KineticWordsController extends Controller {
    static targets = ['word'];
    static values = {
        interval: { type: Number, default: 2800 },
    };

    connect() {
        if (this.wordTargets.length < 2) {
            return;
        }

        this.currentIndex = 0;
        // Le premier mot doit déjà avoir is-active dans le HTML pour SSR friendly.
        // Si aucun n'est actif, on active le premier.
        if (!this.wordTargets.some((w) => w.classList.contains('is-active'))) {
            this.wordTargets[0].classList.add('is-active');
        }

        if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        this.timer = setInterval(() => this.rotate(), this.intervalValue);
    }

    disconnect() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    rotate() {
        const current = this.wordTargets[this.currentIndex];
        const nextIndex = (this.currentIndex + 1) % this.wordTargets.length;
        const next = this.wordTargets[nextIndex];

        // Le mot actuel sort vers le haut
        current.classList.remove('is-active');
        current.classList.add('is-leaving');

        // Reset des autres pour repartir du bas
        this.wordTargets.forEach((w, i) => {
            if (i !== this.currentIndex && i !== nextIndex) {
                w.classList.remove('is-active', 'is-leaving');
            }
        });

        // Petite latence pour que la sortie commence avant l'entrée
        requestAnimationFrame(() => {
            next.classList.remove('is-leaving');
            next.classList.add('is-active');
        });

        // Cleanup du leaving après la transition
        setTimeout(() => {
            current.classList.remove('is-leaving');
        }, 700);

        this.currentIndex = nextIndex;
    }
}
