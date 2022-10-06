import 'lazysizes';
import '../styles/main.css';
import 'regenerator-runtime';
import App from './views/app.js';
import '../styles/responsive.css';
import './components/nav-menu.js';
import './components/hero-wrapper.js';
import './components/restaurant-list.js';
import './components/restaurant-detail.js';
import swRegister from './utils/sw-register.js';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const options = {
  content: document.querySelector('#mainContent'),
  hero: document.querySelector('hero-wrapper'),
  navLinks: document.querySelectorAll('.nav__link'),
  skipLink: document.querySelector('.skip-to-content')
};

const app = new App({
  button: document.querySelector('.btn-nav'),
  drawer: document.querySelector('#drawer'),
  options
});

window.addEventListener('hashchange', () => {
  app.renderPage();
})

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
