import FavoriteRestaurants from '../../data/favorite-restaurants.js';
import LoaderContent from '../../utils/loader-content.js';

const Favorite = {
  async render () {
    return `
      <div class='content'>
        <h2 class='content__heading'>Favorite Restaurant</h2>
        <div id='loaderContainer'></div>
        <restaurant-list></restaurant-list>
      </div>
    `;
  },

  async afterRender () {
    const restaurants = FavoriteRestaurants.getAllRestaurants;
    const restaurantListContainer = document.querySelector('restaurant-list');
    const loaderContainer = document.querySelector('#loaderContainer');

    LoaderContent.init({
      elements: {
        contentContainer: restaurantListContainer,
        loaderContainer
      },
      source: restaurants
    })
  }
};

export default Favorite;