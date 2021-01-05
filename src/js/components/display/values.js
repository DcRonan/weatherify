import * as el from '../elements';
import getWeatherData from '../api/getApi';

// Display values
const showValues = data => {
  el.temp.innerHTML = `${Math.round(data.main.temp)}`;
};

// City search
el.form.addEventListener('submit', e => {
  e.preventDefault();

  const city = document.querySelector('#city-name').value.toLowerCase();

  if (city === '') {
    el.temp.innerHTML = 'Enter a valid city';
  } else {
    getWeatherData(city).then((result) => showValues(result));
  }
});
