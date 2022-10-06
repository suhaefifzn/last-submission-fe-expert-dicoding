import { createNavbarTemplate } from '../views/templates/template-creator.js';

class NavMenu extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = createNavbarTemplate();
  }
}

customElements.define('nav-menu', NavMenu);