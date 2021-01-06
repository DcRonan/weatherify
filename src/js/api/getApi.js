import Time from '../helpers/convertTime';

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
