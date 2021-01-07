import Time from '../helpers/convertTime';
import key from './key';

const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

export default async (city) => {
  const data = await getWeatherData(city);

  const windSpeed = Math.round((data.wind.speed * 3600) / 1610.3);

  return {
    city: data.name,
    temp: data.main.temp,
    feelsLike: Math.round(data.main.feels_like),
    humid: data.main.humidity,
    wind: windSpeed,
    clouds: data.clouds.all,
    sunrise: Time(data.sys.sunrise),
    sunset: Time(data.sys.sunset),
    image: data.weather[0].icon,
    desc: data.weather[0].description,
  };
};
