import * as el from '../elements';
import getWeatherData from '../api/getApi';

// NAVBAR
el.navBar.classList += 'w-full bg-white shadow-lg border-b border-blue-200 p-2 flex justify-end'


// const showValues = (data) => {
//     el.temp.innerHTML = `${data.main.temp}`
// }

const form = document.querySelector('#form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const searchValue = document.querySelector('#city-name');
    const city = searchValue.value.toLowerCase();

    if (city === '') {
        console.log('again!')
    }
    else {
        getWeatherData(city).then(result => console.log(result));
    }
});
