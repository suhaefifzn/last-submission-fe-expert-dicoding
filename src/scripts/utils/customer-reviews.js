import { formReviewTemplate } from '../views/templates/template-creator.js';
import API_ENDPOINT from '../globals/api-endpoint.js';
import swal from 'sweetalert';

const CustomerReviews = {
  init (restaurant) {
    this._id = restaurant.id;
    this._showReviews(restaurant.customerReviews);
    this._getNewCustomerReview();
  },

  _showReviews (reviews) {
    const customerReviewsElement = document.querySelector('.customer-reviews');
    const headingElement = document.createElement('h3');

    customerReviewsElement.innerHTML = '';
    headingElement.classList.add('customer-reviews__heading');
    headingElement.innerText = 'Customer Reviews';
    customerReviewsElement.append(headingElement);

    reviews.forEach((customerReview) => {
      customerReviewsElement.innerHTML += `
        <div class='customer-reviews__item'>
          <div class='customer-reviews__item__name'>
            ${customerReview.name}
          </div>
          <div class='customer-reviews__item__date'>
            ${customerReview.date}
          </div>
          <div class='customer-reviews__item__p'>
            ${customerReview.review}
          </div>
        </div>
      `;
    });

    customerReviewsElement.innerHTML += formReviewTemplate();
  },

  _getNewCustomerReview () {
    const formReviewElement = document.querySelector('#formReview');
    const inputCustomerNameElement = document.querySelector('.form-review__customer__name');
    const inputCustomerReviewElement = document.querySelector('.form-review__customer__review');

    formReviewElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      this._customerName = inputCustomerNameElement.value;
      this._customerReview = inputCustomerReviewElement.value;
      inputCustomerNameElement.value = '';
      inputCustomerReviewElement.value = '';
      await this._sendNewCustomerReview();
    })
  },

  async _sendNewCustomerReview () {
    const review = {
      id: this._id,
      name: this._customerName,
      review: this._customerReview
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    };

    try {
      const response = await fetch(`${API_ENDPOINT.REVIEW}`, options);
      const responseJSON = await response.json();
      this._reviewSuccessfullySubmitted(responseJSON.customerReviews);
    } catch (err) {
      this._reviewFailedToSubmit(err.message);
    }
  },

  _reviewSuccessfullySubmitted (reviews) {
    swal({
      title: 'Sukses',
      text: 'Berhasil mengirim review.',
      icon: 'success',
      button: 'OK'
    }).then(() => this._showReviews(reviews));
  },

  _reviewFailedToSubmit (message) {
    swal({
      title: 'Gagal',
      text: 'Gagal mengirim review, pastikan terhubung internet.',
      icon: 'error',
      button: 'OK'
    }).then(() => console.log(message));
  }
};

export default CustomerReviews;