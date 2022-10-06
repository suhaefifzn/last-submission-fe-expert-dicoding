const SkipToContent = {
  init ({ elements }) {
    this._skipLinkElement = elements.skipLinkElement;
    this._mainContentElement = elements.mainContentElement;

    this._skipLinkClicked();
  },

  _skipLinkClicked () {
    this._skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      this._mainContentElement.focus();
    });
  }
};

export default SkipToContent;