var throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');

const formDataJSON = localStorage.getItem('feedback-form-state');
const formData = JSON.parse(formDataJSON);

if (formData !== null) {
  feedbackForm['email'].value = formData.email;
  feedbackForm['message'].value = formData.message;
}

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    const formData = {
      email: `${feedbackForm['email'].value}`,
      message: `${feedbackForm['message'].value}`,
    };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('feedback-form-state', formDataJSON);
  }, 500),
);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: `${feedbackForm['email'].value}`,
    message: `${feedbackForm['message'].value}`,
  };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  feedbackForm['email'].value = '';
  feedbackForm['message'].value = '';
});
