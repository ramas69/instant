import { Controller } from '@hotwired/stimulus';

/*
 * Split-text controller (DS Editorial Atelier).
 *
 * Wrap chaque mot d'un titre dans `<span class="word"><span>mot</span></span>`
 * pour permettre l'animation séquentielle "word reveal" déclenchée par
 * l'ajout de la classe `.in` (gérée par scroll_reveal_controller).
 *
 * Préserve les balises inline (em, br) pour conserver la structure éditoriale.
 *
 * Usage Twig :
 *   <h2 class="split" data-controller="split-text">
 *     Trois façons de <em>bosser</em> ensemble.
 *   </h2>
 */
export default class SplitTextController extends Controller {
    connect() {
        if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        this.wrap(this.element);
        // Délais escaliers par mot
        this.element.querySelectorAll('.word > span').forEach((s, i) => {
            s.style.transitionDelay = (i * 60) + 'ms';
        });
    }

    wrap(node) {
        const out = [];
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const words = child.textContent.split(/(\s+)/);
                words.forEach((w) => {
                    if (w.trim() === '') {
                        out.push(document.createTextNode(w));
                    } else {
                        const span = document.createElement('span');
                        span.className = 'word';
                        const inner = document.createElement('span');
                        inner.textContent = w;
                        span.appendChild(inner);
                        out.push(span);
                    }
                });
            } else if (child.nodeName === 'BR') {
                out.push(child.cloneNode());
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                // Wrap inner text d'une balise inline (em, etc.) en conservant la balise
                const clone = child.cloneNode(false);
                const innerWords = child.textContent.split(/(\s+)/);
                innerWords.forEach((w) => {
                    if (w.trim() === '') {
                        clone.appendChild(document.createTextNode(w));
                    } else {
                        const span = document.createElement('span');
                        span.className = 'word';
                        const inner = document.createElement('span');
                        inner.textContent = w;
                        span.appendChild(inner);
                        clone.appendChild(span);
                    }
                });
                out.push(clone);
            }
        });
        node.innerHTML = '';
        out.forEach((n) => node.appendChild(n));
    }
}
