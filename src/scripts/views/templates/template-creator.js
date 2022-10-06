import CONFIG from '../../globals/config';

// navigation bar template
const createNavbarTemplate = () => {
  return `
  <ul class='nav__list'>
    <li class='nav__item'>
      <a href='#/' class='nav__link'>
        <i data-feather='home' class='nav__icon'></i>
        Home
      </a>
    </li>
    <li class='nav__item'>
      <a href='#/favorite' class='nav__link'>
        <i data-feather='heart' class='nav__icon'></i>
        Favorite Restaurant
      </a>
    </li>
    <li class='nav__item'>
      <a href='https://github.com/suhaefifzn'
        class='nav__link'
        target='_blank'
        rel="noopener"
      >
        <i data-feather='info' class='nav__icon'></i>
        About Us
      </a>
    </li>
  </ul>
`;
};

// jumbotron or hero template
const jumbotronHeroTemplate = () => {
  return `
  <div class='hero'>
      <picture>
        <source media='(max-width: 600px)' srcset='./heros/hero-image_3-small.jpg'/>
        <img src='./heros/hero-image_3.jpg' alt='' class='hero__img lazyload' />
      </picture>
      <div class='hero__description'>
          <h2>Malapar Alias Malam Lapar</h2>
          <p>Daftar rekomendasi Restoran di Indonesia untuk makan malam</p>
      </div>
  </div>
  `;
};

// display each restaurants
const restaurantItemTemplate = (restaurant) => {
  return `
    <article>
      <section>
        <div class='img'>
          <div class='img__location' title='Location'>
            ${restaurant.city}
          </div>
          <img src='${CONFIG.SMALL_IMG_URL}/${restaurant.pictureId}' class='img__item lazyload'
            alt='Image of Restaurant ${restaurant.name} from ${restaurant.city}'>
        </div>
        <div class='desc'>
          <div class='desc-rating' title='Rating'>
              <div class='desc-rating__txt'>
                Rating
              </div>
              <div class='desc-rating__score'>
                ${restaurant.rating}/5
              </div>
          </div>
          <div class='desc-title' >
            <div class='desc-title__txt'>
              Name
            </div>
            <h2 class='desc-title__name' title='Restaurant Name'>
              <a class='desc-title__name__link'
                href='#/detail/${restaurant.id}'>
                ${restaurant.name}
              </a>
            </h2>
          </div>
          <div class='desc-p' >
            <p class="desc-p__longtxt" title='Description'>
              ${restaurant.description}
            </p>
          </div>
        </div>
      </section>
    </article>
  `;
};

// display detail of restaurant
const restaurantDetailTemplate = () => {
  return `
    <article class='detail'>
      <div class='detail-simple' tabindex='0'>
        <div class='detail-simple__img'>
          <h2 class='detail-simple__heading'
            title='Restaurant Name'
          >
          </h2>
          <div id='likeButtonContainer'></div>
          <img />
        </div>
        <div class='detail-simple__body'>
          <div class='detail-simple__body__rating'>
            <div class='rating__txt'>Rating</div>
            <div class='rating__score'>
              <span class='rating__score__txt'></span>
            </div>
          </div>
          <div class='detail-simple__body__categories'>
            <div class='categories__txt'>Kategori</div>
            <div class='categories__name'></div>
          </div>
          <div class='detail-simple__body__city' >
            <div class='city__txt'>Kota</div>
            <div class='city__name'></div>
          </div>
          <div class='detail-simple__body__address'>
            <div class='address__txt'>Alamat</div>
            <div class='address__name'></div>
          </div>
          <div class='detail-simple__body__desc'>
            <div class='desc__txt'>
              Deskripsi
            </div>
            <p class='desc__p'></p>  
          </div>
        </div>
      </div>
      <div class='detail-menu' tabindex='0'>
        <h3 class='detail-menu__title' >Menu Tersedia</h3>
        <div class='detail-menu__wrapper'>
          <div class='detail-menu__foods'>
            <h4 class='detail-menu__title'>Makanan</h4>
          </div>
          <div class='detail-menu__drinks'>
            <h4 class='detail-menu__drinks__title'>Minuman</h4>
          </div>
        </div>
      </div>
      ${customerReviewsTemplate()}
    </article>
  `;
};

// display customer reviews
const customerReviewsTemplate = () => {
  return `
    <div class='customer-reviews' tabindex='0'>
    </div>
  `;
};

// form to submit new customer review
const formReviewTemplate = () => {
  return `
    <div class='form-review'>
      <h3 class='form-review__heading'>Tambah Review</h3>
      <form id='formReview'>
        <input
          type='text'
          name='customer_name' 
          class='form-review__customer__name'
          placeholder='Masukkan nama'
          required
        />
        <textarea
          rows='20'
          name='customer__review'
          class='form-review__customer__review'
          placeholder='Masukkan review di sini'
          required
        ></textarea>
        <button
          class='form-review__submit__btn'
          type='submit'
        >
          Kirim Review
        </button>
      </form>
    </div>
  `;
};

// like button
const likeRestaurantButtonTemplate = () => {
  return `
    <button class='like' id='likeButton' aria-label='Add this Restaurant to Favorite List'>
      <div class='like__icon'>
        <img src='./heart-o.png' alt='Favorite Button Icon' class='lazyload'/>
      </div>
    </button>
  `;
};

const unlikeRestaurantButtonTemplate = () => {
  return `
    <button class='like' id='likeButton' aria-label='Remove this Restaurant from Favorite List'>
      <div class='like__icon'>
        <img src='./heart.png' alt='Favorite Button Icon' class='lazyload'/>
      </div>
    </button>
  `;
};

// loader template
const loadIndicatorTemplate = () => {
  return `
    <div class='loader'></div>
  `;
};

export { 
  createNavbarTemplate,
  jumbotronHeroTemplate,
  restaurantItemTemplate,
  restaurantDetailTemplate, 
  customerReviewsTemplate,
  formReviewTemplate,
  likeRestaurantButtonTemplate,
  unlikeRestaurantButtonTemplate,
  loadIndicatorTemplate
};
