import FavoriteRestaurants from '../../src/scripts/data/favorite-restaurants.js';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter.js';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurants,
    restaurant
  });
};

export { createLikeButtonPresenterWithRestaurant };