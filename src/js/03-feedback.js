const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  userMail: document.querySelector('input'),
  userMessage: document.querySelector('textarea'),
};

const STORAGE_MAIL_KEY = "user-mail";
const STORAGE_MESSAGE_KEY = "text-message";

refs.userMail.addEventListener('input', throttle(onMailInput, 500));
refs.userMessage.addEventListener('input', throttle(onMessageInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

makeUserMail();
makeUserMessage();

function onMailInput(event) {
  const email = event.target.value;

  localStorage.setItem(STORAGE_MAIL_KEY, email);
};

function onMessageInput(event) {
  const message = event.target.value;

  localStorage.setItem(STORAGE_MESSAGE_KEY, message);
};

function onFormSubmit(event) {
  event.preventDefault();

  console.log(refs.userMail.value);
  console.log(refs.userMessage.value);

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_MAIL_KEY);
  localStorage.removeItem(STORAGE_MESSAGE_KEY);
};

function makeUserMail() {
  const savedMail = localStorage.getItem(STORAGE_MAIL_KEY);

  if (savedMail) {
    refs.userMail.value = savedMail;
  }
};

function makeUserMessage() {
  const savedMessage = localStorage.getItem(STORAGE_MESSAGE_KEY);

  if (savedMessage) {
    refs.userMessage.value = savedMessage;
  }
};