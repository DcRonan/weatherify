import Time from '../helpers/convertTime';
import Temp from '../helpers/convertTemp';

const getWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b65d7b54d34b0aecf82c86c39aabf664&units=metric`);
  const data = await response.json();
  return data;
};

export default async (city) => {
  const data = await getWeatherData(city);

  const windSpeed = Math.round((data.wind.speed * 3600) / 1610.3);

  return {
    city: data.name,
    temp: `${Temp(Math.round(data.main.temp))}°C`,
    feelsLike: `Feels like ${Math.round(data.main.feels_like)}°C`,
    humid: `Humidity ${data.main.humidity}%`,
    wind: `Wind ${windSpeed} mph`,
    clouds: `Cloud Cover ${data.clouds.all}%`,
    sunrise: `Sunrise ${Time(data.sys.sunrise)}`,
    sunset: `Sunset ${Time(data.sys.sunset)}`,
    image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    desc: data.weather[0].description,
  };
};
