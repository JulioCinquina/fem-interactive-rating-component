'use strict';

const formEl = document.querySelector('.form');
const surveyEl = document.querySelector('.survey');
const thanksEl = document.querySelector('.thanks');
const ratingEl = thanksEl.querySelector('.rating');

const displayThanks = function () {
  surveyEl.style.display = 'none';
  thanksEl.style.display = 'grid';
  ratingEl.focus();
};

const handleSubmit = function (event) {
  const selectedRating = formEl.querySelector('input:checked').value;
  ratingEl.textContent = `You selected ${selectedRating} out of 5`;
  displayThanks();
  event.preventDefault();
};

formEl.addEventListener('submit', handleSubmit);
