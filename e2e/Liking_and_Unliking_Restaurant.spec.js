const assert = require('assert');
Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('.not__found');
  I.see('Kamu belum memiliki daftar restaurant favorite.', '.not__found');
});

Scenario('Liking restaurant', async ({ I }) => {
  I.waitForElement('.not__found');
  I.see('Kamu belum memiliki daftar restaurant favorite.', '.not__found');

  I.amOnPage('/');

  I.waitForElement('.desc-title__name__link');

  const firstRestaurant = locate('.desc-title__name__link').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('restaurant-item');
  I.seeElement('restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.desc-title__name__link');
  
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking restaurant', async ({ I }) => {
  I.waitForElement('.not__found');
  I.see('Kamu belum memiliki daftar restaurant favorite.', '.not__found');

  I.amOnPage('/');
  I.waitForElement('.desc-title__name__link');
  
  I.click(locate('.desc-title__name__link').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('restaurant-item');
  I.seeElement('.desc-title__name__link');
  
  const firstLikedRestaurant = locate('.desc-title__name__link').first();
  const firstLikedRestaurantName = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.waitForElement('restaurant-detail');
  I.waitForElement('.detail-simple__heading');
  I.seeElement('.detail-simple__heading');
  const unlikedRestaurantName = await I.grabTextFrom('.detail-simple__heading');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  assert.strictEqual(firstLikedRestaurantName, unlikedRestaurantName);

  I.amOnPage('/#/favorite');
  I.waitForElement('.not__found');
  I.see('Kamu belum memiliki daftar restaurant favorite.', '.not__found');
  pause();
});