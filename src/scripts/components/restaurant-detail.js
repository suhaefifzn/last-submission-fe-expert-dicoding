import { restaurantDetailTemplate } from '../views/templates/template-creator.js';
import DetailRestaurantInitiator from '../utils/detail-restaurant-initiator.js';
import LikeButtonPresenter from '../utils/like-button-presenter.js';
import FavoriteRestaurants from '../data/favorite-restaurants.js';
import CustomerReviews from '../utils/customer-reviews.js';

class RestaurantDetail extends HTMLElement {
  set content (restaurant) {
    this._content = restaurant;
    this.render();
  }

  render () {
    this.innerHTML = restaurantDetailTemplate();
    DetailRestaurantInitiator.init(this._content);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurants,
      restaurant: this._content
    });
    CustomerReviews.init(this._content);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);