import * as el from '../components/elements';
import getWeatherData from '../api/getApi';

// Display values
const showValues = data => {
  el.cityName.textContent = data.city;
  el.temp.textContent = data.temp;
  el.feelsLike.textContent = data.feelsLike;
  el.humidity.textContent = data.humid;
  el.wind.textContent = data.wind;
  el.cloud.textContent = data.clouds;
  el.sunrise.textContent = data.sunrise;
  el.sunset.textContent = data.sunset;
  el.img.src = data.image;
  el.desc.textContent = data.desc;
};

// City search
el.form.addEventListener('submit', e => {
  e.preventDefault();
  const city = document.querySelector('#city-name').value.toLowerCase();
  city === '' ? el.temp.innerHTML = 'Enter a valid city' : getWeatherData(city).then((result) => showValues(result));
  el.form.reset();
});