const throttle = require('lodash.throttle');
const formRef = document.querySelector('.feedback-form');
const FEEDBACK_DATA_KEY = "feedback-form-state";

window.addEventListener('DOMContentLoaded', onPageLoad);
formRef.addEventListener('input', throttle(saveDataToStorage,500));
formRef.addEventListener('submit', onFormSubmit);

function onPageLoad() {
  if (localStorage) {
    loadStorageData();
  }
}

function saveDataToStorage() {
  const savedFormData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  }

  try {
    const savedFormDataJSON = JSON.stringify(savedFormData);
    localStorage.setItem(FEEDBACK_DATA_KEY, savedFormDataJSON);
  } catch (error) {
    console.log(error);
  }
}

function loadStorageData() {
  const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

  if (!savedFormData) return;
  formRef.elements.email.value = savedFormData.email;
  formRef.elements.message.value = savedFormData.message;
}

function onFormSubmit(event) {
  event.preventDefault();

  const tempStorageData = localStorage.getItem(FEEDBACK_DATA_KEY);

  console.log(tempStorageData);

  event.currentTarget.reset();

  localStorage.removeItem(FEEDBACK_DATA_KEY);
};