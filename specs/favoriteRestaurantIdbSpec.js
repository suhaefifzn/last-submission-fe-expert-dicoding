import { 
  itActsAsFavoriteRestaurantModel
} from './contract/favoriteRestaurantContract.js';
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurants.js';

describe('Favorite Restaurant Idb Contract Test', () => {
  afterEach(async () => {
    (await FavoriteRestaurants.getAllRestaurants())
      .forEach(async (restaurant) => {
        await FavoriteRestaurants.deleteRestaurant(restaurant.id);
      });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurants);
});