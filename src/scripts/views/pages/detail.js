import RestaurantDicodingSrc from '../../data/restaurant-dicoding-src.js';
import UrlParser from '../../routes/url-parser.js';
import LoaderContent from '../../utils/loader-content.js';

const Detail = {
  async render () {
    return `
      <div class='content'>
        <h2 class='content__heading'>Detail Restaurant</h2>
        <div id='loaderContainer'></div>
        <restaurant-detail></restaurant-detail>
      </div>
    `;
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = RestaurantDicodingSrc.detailRestaurant;
    const restaurantDetailContainer = document.querySelector('restaurant-detail');
    const loaderContainer = document.querySelector('#loaderContainer');

    LoaderContent.init({
      elements: {
        contentContainer: restaurantDetailContainer,
        loaderContainer
      },
      source: restaurant,
      id: url.id
    });
  }
};

export default Detail;