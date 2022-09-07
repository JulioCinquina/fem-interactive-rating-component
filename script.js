'use strict';

const formEl = document.querySelector('.form');
const surveyEl = document.querySelector('.survey');
const thanksEl = document.querySelector('.thanks');
const ratingEl = thanksEl.querySelector('.rating');

const getSelectedRating = function () {
  try {
    const selectedRating = document.querySelector('input:checked').value;
    return selectedRating;
  } catch {
    return null;
  }
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
    // Display error message
  }
  event.preventDefault();
};

formEl.addEventListener('submit', handleSubmit);
