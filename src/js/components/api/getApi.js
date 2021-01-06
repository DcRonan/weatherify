const getWeatherData = async city => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b65d7b54d34b0aecf82c86c39aabf664&units=metric`,
  );
  const data = await response.json();
  return data;
};

export default async city => {
  const data = await getWeatherData(city)
  
  const windSpeed = Math.round(data.wind.speed * 3600 / 1610.3)

  return {
    time: Date(data.timezone),
    city: data.name,
    temp: `${Math.round(data.main.temp)}°C`,
    feelsLike: `Feels like ${Math.round(data.main.feels_like)}°C`,
    wind: `Wind ${windSpeed} mph`,
    clouds: `Cloud Cover ${data.clouds.all}%`,
    sunrise: `Sunrise ${data.sys.sunrise}`,
    sunset: `Sunset ${data.sys.sunset}`,
    image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }
};
