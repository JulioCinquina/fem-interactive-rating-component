'use strict';

const formEl = document.querySelector('.form');
const surveyEl = document.querySelector('.survey');
const errorMessageEl = document.querySelector('.error-message');
const thanksEl = document.querySelector('.thanks');
const ratingEl = thanksEl.querySelector('.rating');

const getSelectedRating = function () {
  return document.querySelector('input:checked')?.value;
};

const displayError = function () {
  errorMessageEl.textContent = '';
  errorMessageEl.textContent = 'Please select a value:';
  errorMessageEl.classList.add('visible');
};

const displayThanks = function (selectedRating) {
  ratingEl.textContent = `You selected ${selectedRating} out of 5`;

  // Hides survey and shows thanks state after "close" animation
  surveyEl.addEventListener(
    'animationend',
    () => {
      surveyEl.classList.add('hidden');
      thanksEl.classList.add('visible');
      ratingEl.focus(); // Directs screen reader focus to top element of thanks
    },
    { once: true }
  );

  // Plays "close" animation
  surveyEl.classList.add('close');
};

const handleSubmit = function (event) {
  const selectedRating = getSelectedRating();
  if (selectedRating) {
    displayThanks(selectedRating);
  } else {
    displayError();
  }
  event.preventDefault();
};

formEl.addEventListener('submit', handleSubmit);
