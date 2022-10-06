const NavbarInitiator = {
  init ({ button, drawer, options }) {
    const heroAndContent = [options.content, options.hero];
    const navLinks = options.navLinks; // output node list

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    heroAndContent.forEach((element) => {
      element.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      })
    });

    navLinks.forEach((element) => {
      element.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      })
    });
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};

export default NavbarInitiator;