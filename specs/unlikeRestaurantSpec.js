import FavoriteRestaurants from '../src/scripts/data/favorite-restaurants.js';
import * as TestFactories from './helpers/testFactories.js';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurants.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurants.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked',
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(document
        .querySelector('[aria-label="Remove this Restaurant from Favorite List"]'))
        .toBeTruthy();
    }
  );

  it('should not display like widget when the restaurant has been liked',
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });
      
      expect(document
        .querySelector('[aria-label="Add this Restaurant to Favorite List"]'))
        .toBeFalsy();
    }
  );

  it('should be able to remove liked restaurant from the list',
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });

      document
        .querySelector('[aria-label="Remove this Restaurant from Favorite List"]')
        .dispatchEvent(new Event('click'));
      
      expect(await FavoriteRestaurants.getAllRestaurants())
        .toEqual([]);
    }
  );

  //! negative scenario
  it('should not throw error if the unliked restaurant is not in the list',
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });

      await FavoriteRestaurants.deleteRestaurant(1);

      document
        .querySelector('[aria-label="Remove this Restaurant from Favorite List"]')
        .dispatchEvent(new Event('click'));
      
      expect(await FavoriteRestaurants.getAllRestaurants())
        .toEqual([]);
    }
  );
})