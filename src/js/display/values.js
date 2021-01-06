import * as el from '../components/elements';
import getWeatherData from '../components/getWeather';
import Temp from '../helpers/convertTemp';

let clicked;

// Display info
const showValues = data => {
  el.cityName.textContent = data.city;
  el.temp.textContent = clicked === true ? `${Temp(Math.round(data.temp))}°F` : `${Math.round(data.temp)}°C`;
  el.feelsLike.textContent = clicked === true ? `${Temp(Math.round(data.feelsLike))}°F` : `${Math.round(data.feelsLike)}°C`;
  el.humidity.textContent = `${data.humid}%`;
  el.wind.textContent = `${data.wind} mph`;
  el.cloud.textContent = `${data.clouds}%`;
  el.sunrise.textContent = data.sunrise;
  el.sunset.textContent = data.sunset;
  el.img.src = `https://openweathermap.org/img/wn/${data.image}@2x.png`;
  el.desc.textContent = data.desc;
};

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

// Error message
const showError = () => el.errorMsg.textContent = 'Enter a valid city';
const hideError = () => el.errorMsg.innerHTML = '';
const removeInfo = () => el.section.removeChild(el.content);
const showContent = () => el.section.appendChild(el.content);

// City search
el.form.addEventListener('submit', e => {
  e.preventDefault();
  const city = document.querySelector('#city-name').value.toLowerCase();
  city === '' ? showError() && removeInfo() : showContent() && getWeatherData(city).then((result) => showValues(result)).catch(error => showError(error)) && hideError();
  el.form.reset();
});
