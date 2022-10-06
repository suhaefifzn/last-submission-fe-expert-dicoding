import CONFIG from '../globals/config';

const DetailRestaurantInitiator = {
  init (restaurant) {
    this._showDescription(restaurant);
    this._showCategories(restaurant.categories);
    this._foodMenus(restaurant.menus.foods);
    this._drinkMenus(restaurant.menus.drinks);
  },

  _showDescription (desc) {
    const restaurantNameElement = document.querySelector('.detail-simple__heading');
    const restaurantImgElement = document.querySelector('.detail-simple__img img');
    const restaurantRatingElement = document.querySelector('.rating__score__txt');
    const restaurantCityElement = document.querySelector('.city__name');
    const restaurantAddressElemenet = document.querySelector('.address__name');
    const restaurantDescElement = document.querySelector('.detail-simple__body__desc .desc__p');

    restaurantNameElement.innerText = desc.name;
    restaurantImgElement.setAttribute('data-src', `${CONFIG.MEDIUM_IMG_URL}/${desc.pictureId}`);
    restaurantImgElement.setAttribute('alt', `Image of Restaurant ${desc.name}`);
    restaurantImgElement.classList.add('lazyload');
    restaurantRatingElement.innerText = `${desc.rating}/5`;
    restaurantCityElement.innerText = desc.city;
    restaurantAddressElemenet.innerText = desc.address;
    restaurantDescElement.innerText = desc.description;
  },

  _foodMenus (foods) {
    const foodMenusElementWrapper = document.querySelector('.detail-menu__foods');
    const foodMenusListWrapper = document.createElement('ul');
    foodMenusListWrapper.classList.add('detail-menu__foods__list');

    if (!foods) {
      const textMenuNotAvailableElement = document.createElement('p');
      textMenuNotAvailableElement.innerText = 'Menu makanan belum tersedia';
      foodMenusElementWrapper.appendChild(textMenuNotAvailableElement);
    } else {
      this._showMenus(foodMenusListWrapper, foods);
      foodMenusElementWrapper.appendChild(foodMenusListWrapper);
    }
  },

  _drinkMenus (drinks) {
    const drinkMenusElementWrapper = document.querySelector('.detail-menu__drinks');
    const drinkMenusListWrapper = document.createElement('ul');
    drinkMenusListWrapper.classList.add('detail-menu__drinks__list');

    if (!drinks) {
      const textMenuNotAvailableElement = document.createElement('p');
      textMenuNotAvailableElement.innerText = 'Menu minuman belum tersedia';
      drinkMenusElementWrapper.appendChild(textMenuNotAvailableElement);
    } else {
      this._showMenus(drinkMenusListWrapper, drinks);
      drinkMenusElementWrapper.appendChild(drinkMenusListWrapper);
    }
  },

  _showMenus (element, menus) {
    menus.forEach((menu) => {
      const menuItem = document.createElement('li');
      menuItem.classList.add('detail-menu__item');
      menuItem.innerText = menu.name;
      element.appendChild(menuItem);
    });
  },

  _showCategories (categories) {
    const categoriesElement = document.querySelector('.categories__name');
    const categoryList = [];
    
    categories.forEach((category) => {
      categoryList.push(category.name);
    });

    categoriesElement.innerText = categoryList.join(', ');
  }
};

export default DetailRestaurantInitiator;