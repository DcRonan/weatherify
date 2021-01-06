import * as el from '../components/elements';
import getWeatherData from '../api/getApi';
import Temp from '../helpers/convertTemp';

let clicked;

// Celsius
el.cTemp.addEventListener('click', (e) => {
  e.preventDefault();
  clicked = false;
  const city = document.querySelector('#city').textContent;
  getWeatherData(city).then((result) => showValues(result));
});

// Fahrenheit
el.fTemp.addEventListener('click', (e) => {
  e.preventDefault();
  clicked = true;
  const city = document.querySelector('#city').textContent;
  getWeatherData(city).then((result) => showValues(result));
});

// Display info
const showValues = data => {
  el.cityName.textContent = data.city;
  el.temp.textContent = clicked === true ? `${Temp(Math.round(data.temp))}°F` : `${Math.round(data.temp)}°C`
  el.feelsLike.textContent = data.feelsLike;
  el.humidity.textContent = data.humid;
  el.wind.textContent = data.wind;
  el.cloud.textContent = data.clouds;
  el.sunrise.textContent = data.sunrise;
  el.sunset.textContent = data.sunset;
  el.img.src = data.image;
  el.desc.textContent = data.desc;
};

// Error message
const showError = () => el.errorMsg.textContent = 'Enter a valid city';
const hideError = () => el.errorMsg.innerHTML = '';
const removeInfo = () => el.section.innerHTML = '';
const showContent = () => el.section.appendChild(el.content)

// City search
el.form.addEventListener('submit', e => {
  e.preventDefault();
  const city = document.querySelector('#city-name').value.toLowerCase();
  city === '' ? showError() && removeInfo() : showContent() && getWeatherData(city).then((result) => showValues(result)) && hideError();
  el.form.reset();
});
