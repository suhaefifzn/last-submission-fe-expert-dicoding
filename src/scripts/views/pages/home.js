import RestaurantDicodingSrc from '../../data/restaurant-dicoding-src.js';
import LoaderContent from '../../utils/loader-content.js';

const Home = {
  async render () {
    return `
      <div class='content'>
        <h2 class='content__heading'>List Restaurant</h2>
        <div id='loaderContainer'></div>
        <restaurant-list></restaurant-list>
      </div>
    `;
  },

  async afterRender () {
    const restaurants = RestaurantDicodingSrc.restaurantList;
    const restaurantListContainer = document.querySelector('restaurant-list');
    const loaderContainer = document.querySelector('#loaderContainer');

    LoaderContent.init({
      elements: {
        contentContainer: restaurantListContainer,
        loaderContainer
      },
      source: restaurants
    });
  }
};

export default Home;