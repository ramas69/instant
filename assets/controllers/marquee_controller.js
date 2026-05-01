import { Controller } from '@hotwired/stimulus';

/*
 * Marquee Stimulus controller.
 *
 * Crée un défilement horizontal infini en clonant le contenu du track
 * (pattern legacy : duplication du contenu pour boucle CSS continue).
 * L'animation translateX est gérée en CSS pur (`@keyframes marquee-scroll`).
 *
 * Usage Twig :
 *   <div class="marquee" data-controller="marquee">
 *     <div class="marquee-track" data-marquee-target="track">
 *       <span class="marquee-item">Claude Sonnet 4.5</span>
 *       <span class="marquee-item">Projects</span>
 *       …
 *     </div>
 *   </div>
 */
export default class extends Controller {
    static targets = ['track'];

    connect() {
        // Clone le contenu pour créer le défilement infini sans saut visible
        if (this.hasTrackTarget) {
            this.trackTarget.insertAdjacentHTML('beforeend', this.trackTarget.innerHTML);
        }
    }
}
