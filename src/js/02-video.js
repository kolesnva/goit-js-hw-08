import Player from "@vimeo/player";

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_TIME = "videoplayer-current-time";
const currentTime = getTimeFromStorage();

window.addEventListener('DOMContentLoaded', onPageLoad);

setPlayerStartTime();

function setPlayerStartTime() {
  if (currentTime) {
    player.setCurrentTime(currentTime.seconds);
  };
}

function onPageLoad() {
  player.on('timeupdate', throttle(setTimeToStorage, 1000))
};

function getTimeFromStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_TIME));
};

function setTimeToStorage(time) {
  try {
    localStorage.setItem(STORAGE_TIME, JSON.stringify(time));
  } catch (error) {
    console.log(error);
  }
};