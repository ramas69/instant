import { Controller } from '@hotwired/stimulus';

/*
 * Pillars-pin controller (DS Editorial Atelier).
 *
 * Active dynamiquement un pilier (1 sur N) selon la position scroll dans la
 * section. Le visuel sticky à droite suit le pilier actif.
 *
 * Click manuel sur un pilier l'active aussi (toggle direct).
 *
 * Usage Twig :
 *   <section class="pillars" data-controller="pillars-pin">
 *     <div class="pillars-list" data-pillars-pin-target="list">
 *       <div class="pillar active" data-pillars-pin-target="pillar">…</div>
 *       <div class="pillar" data-pillars-pin-target="pillar">…</div>
 *       …
 *     </div>
 *     <div class="pillars-visual">
 *       <div class="pillars-frame active" data-pillars-pin-target="frame">…</div>
 *       <div class="pillars-frame" data-pillars-pin-target="frame">…</div>
 *       …
 *     </div>
 *   </section>
 */
export default class PillarsPinController extends Controller {
    static targets = ['pillar', 'frame'];

    connect() {
        this.boundAnimate = () => this.animate();
        globalThis.addEventListener('scroll', this.boundAnimate, { passive: true });

        // Activation clavier + souris (role="button" → Enter/Space + click)
        this.pillarTargets.forEach((pillar, i) => {
            pillar.addEventListener('click', () => this.activate(i));
            pillar.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.activate(i);
                }
            });
        });

        this.animate();
    }

    disconnect() {
        if (this.boundAnimate) {
            globalThis.removeEventListener('scroll', this.boundAnimate);
        }
    }

    animate() {
        const rect = this.element.getBoundingClientRect();
        const vh = globalThis.innerHeight;
        // Démarre quand la section atteint le milieu d'écran, fini quand le bas passe le milieu
        const start = vh * 0.6;
        const end = -rect.height + vh * 0.4;
        const total = start - end;
        if (total <= 0) {
            return;
        }
        const scrolled = Math.max(0, Math.min(total, start - rect.top));
        const t = scrolled / total; // 0 → 1

        const count = this.pillarTargets.length;
        let idx = 0;
        for (let i = 1; i < count; i++) {
            if (t > i / count) {
                idx = i;
            }
        }

        this.activate(idx);
    }

    activate(idx) {
        this.pillarTargets.forEach((p, i) => {
            const isActive = i === idx;
            p.classList.toggle('active', isActive);
            p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        this.frameTargets.forEach((f, i) => f.classList.toggle('active', i === idx));
    }
}
