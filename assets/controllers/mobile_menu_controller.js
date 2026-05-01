import { Controller } from '@hotwired/stimulus';

/*
 * Mobile menu Stimulus controller.
 *
 * Toggle l'ouverture du menu mobile (drawer) via le bouton burger.
 * Bloque le scroll du body quand ouvert. Ferme à la touche Échap.
 *
 * Usage Twig :
 *   <header data-controller="mobile-menu">
 *     <button data-action="click->mobile-menu#toggle" aria-controls="mobile-drawer">…</button>
 *     <div id="mobile-drawer" data-mobile-menu-target="drawer" hidden>…</div>
 *   </header>
 */
export default class extends Controller {
    static targets = ['drawer', 'button'];

    connect() {
        this.boundEscape = (e) => this.onEscape(e);
        document.addEventListener('keydown', this.boundEscape);
    }

    disconnect() {
        document.removeEventListener('keydown', this.boundEscape);
        document.body.style.overflow = '';
    }

    toggle(event) {
        event.preventDefault();
        const isOpen = !this.drawerTarget.hidden;
        if (isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.drawerTarget.hidden = false;
        // double rAF pour permettre la transition CSS
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.drawerTarget.classList.add('is-open');
            });
        });
        if (this.hasButtonTarget) {
            this.buttonTarget.setAttribute('aria-expanded', 'true');
        }
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.drawerTarget.classList.remove('is-open');
        if (this.hasButtonTarget) {
            this.buttonTarget.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
        // attendre la fin de la transition avant de hider
        setTimeout(() => {
            this.drawerTarget.hidden = true;
        }, 300);
    }

    onEscape(event) {
        if (event.key === 'Escape' && !this.drawerTarget.hidden) {
            this.close();
        }
    }
}
