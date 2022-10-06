import { jumbotronHeroTemplate } from '../views/templates/template-creator.js';

class HeroWrapper extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = jumbotronHeroTemplate();
  }
}

customElements.define('hero-wrapper', HeroWrapper);
