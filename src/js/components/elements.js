const navBar = document.querySelector('nav');
const form = document.querySelector('#form');
const temp = document.querySelector('#temp');
const cityName = document.querySelector('#city');
const time = document.querySelector('#time');
const feelsLike = document.querySelector('#feels-like');
const wind = document.querySelector('#wind');
const cloud = document.querySelector('#cloud');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const img = document.createElement('img');
const imgDiv = document.querySelector('#icon');
imgDiv.appendChild(img);
const desc = document.querySelector('#description');

export {
  navBar,
  temp,
  form,
  cityName,
  time,
  feelsLike,
  wind,
  cloud,
  sunrise,
  sunset,
  img,
  desc
};
