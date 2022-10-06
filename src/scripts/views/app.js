import routes from '../routes/routes.js';
import UrlParser from '../routes/url-parser.js';
import SkipToContent from '../utils/skip-to-content.js';
import NavbarInitiator from '../utils/navbar-initiator.js';

const feather = require('feather-icons');

class App {
  constructor ({ button, drawer, options }) {
    this._button = button;
    this._drawer = drawer;
    this._options = options;

    this._initialAppShell();
  }

  _initialAppShell () {
    NavbarInitiator.init({
      button: this._button,
      drawer: this._drawer,
      options: this._options
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._options.content.innerHTML = await page.render();
    await page.afterRender();

    SkipToContent.init({
      elements: {
        skipLinkElement: this._options.skipLink,
        mainContentElement: this._options.content
      }
    });

    feather.replace();
  }
}

export default App;