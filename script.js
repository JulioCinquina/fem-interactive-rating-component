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
  surveyEl.style.display = 'none';
  thanksEl.style.display = 'grid';
  ratingEl.focus();
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
