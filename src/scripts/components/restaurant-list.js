import './restaurant-item.js';

class RestaurantList extends HTMLElement {
  set content (restaurants) {
    this._content = restaurants;
    this.render();
  }

  render () {
    this._content.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.content = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
