import { loadIndicatorTemplate } from '../views/templates/template-creator';

const LoaderContent = {
  init ({ elements, source, id }) {
    this._id = id;
    this._source = source;
    this._loaderContainer = elements.loaderContainer;
    this._contentContainer = elements.contentContainer;
    this._loaderContainer.innerHTML = loadIndicatorTemplate();

    this._loadingAnimation();
  },

  async _getSource (source) {
    try {
      const MIN_ITEM_TO_DISPLAY = 1;
      const response = await this._checkSourceHasIDOrNot(source);
      this._changeDisplayLoading();
      if (response.length < MIN_ITEM_TO_DISPLAY) {
        return this._errorMessageFavoritePage();
      }
      return this._responseSuccess(response);
    } catch (err) {
      return this._errorMessageHomeAndDetailPage();
    }
  },

  async _checkSourceHasIDOrNot (source) {
    if (!this._id) {
      return source();
    }
    return source(this._id);
  },

  _responseSuccess (response) {
    this._contentContainer.content = response;
    return this._contentContainer;
  },

  _errorMessageFavoritePage () {
    const message = 'Kamu belum memiliki daftar restaurant favorite.'
    this._changeDisplayContent();
    return this._loadFailed(message);
  },

  _errorMessageHomeAndDetailPage () {
    const message = 'Gagal memuat content, pastikan terhubung ke internet.';
    this._changeDisplayContent();
    return this._loadFailed(message);
  },

  _loadingAnimation () {
    const LOADING_TIME = 500; // 0.5 seconds
    setTimeout(async () => {
      await this._getSource(this._source);
    }, LOADING_TIME);
  },

  _changeDisplayLoading () {
    const display = 'none';
    const loaderElement = document.querySelector('.loader');
    loaderElement.style.display = display;
  },

  _changeDisplayContent () {
    const display = 'none';
    const restaurantListElement = document.querySelector('restaurant-list');
    const restaurantDetailElement = document.querySelector('restaurant-detail');

    if (restaurantListElement) {
      restaurantListElement.style.display = display;
    }

    if (restaurantDetailElement) {
      restaurantDetailElement.style.display = display;
    }
  },

  _loadFailed (message) {
    const createPElement = document.createElement('p');
    createPElement.innerText = message;
    createPElement.classList.add('not__found');

    this._changeDisplayLoading('none');
    this._loaderContainer.appendChild(createPElement);
    return this._loaderContainer;
  }
}

export default LoaderContent;