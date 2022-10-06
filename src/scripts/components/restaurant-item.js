import { restaurantItemTemplate } from '../views/templates/template-creator.js';

class RestaurantItem extends HTMLElement {
  set content (restaurant) {
    this._content = restaurant;
    this.render();
  }

  render () {
    this.innerHTML = restaurantItemTemplate(this._content);
  }
}

customElements.define('restaurant-item', RestaurantItem);
