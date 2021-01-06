const navBar = document.querySelector('nav');
const main = document.querySelector('main');
const form = document.querySelector('#form');
const temp = document.querySelector('#temp');
const cityName = document.querySelector('#city');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humid');
const wind = document.querySelector('#wind');
const cloud = document.querySelector('#cloud');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const img = document.createElement('img');
const imgDiv = document.querySelector('#icon');
imgDiv.appendChild(img);
const desc = document.querySelector('#description');
const fTemp = document.querySelector('#fahrenheit');
const cTemp = document.querySelector('#celsius');
const errorMsg = document.querySelector('#error-msg');
const section = document.querySelector('section');
const content = document.querySelector('#content');

export {
  navBar,
  main,
  temp,
  form,
  cityName,
  feelsLike,
  humidity,
  wind,
  cloud,
  sunrise,
  sunset,
  img,
  desc,
  fTemp,
  cTemp,
  errorMsg,
  section,
  content
};
