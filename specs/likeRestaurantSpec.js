import FavoriteRestaurants from '../src/scripts/data/favorite-restaurants.js';
import * as TestFactories from './helpers/testFactories.js';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show like button when the restaurant has not been liked before', 
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(document.querySelector('[aria-label="Add this Restaurant to Favorite List"]'))
        .toBeTruthy();
    }
  );

  it('should not show the unlike button when the restaurant has not been liked before',
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });

      expect(document
        .querySelector('[aria-label="Remove this Restaurant from Favorite List"]'))
        .toBeFalsy();
    }
  );

  it('should be able to like restaurant', async () => {
    await TestFactories
      .createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurants.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurants.deleteRestaurant(1);
  });

  //! negative scenario
  it('should not add a restaurant again when its already liked',
    async () => {
      await TestFactories
        .createLikeButtonPresenterWithRestaurant({ id: 1 });

      await FavoriteRestaurants.putRestaurant({ id: 1 });
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurants.getAllRestaurants())
        .toEqual([{ id: 1 }]);
      FavoriteRestaurants.deleteRestaurant(1);
    }
  );

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories
      .createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
  });
});