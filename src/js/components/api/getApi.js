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
    time: new Date(data.timezone),
    city: data.name,
    temp: `Temp: ${Math.round(data.main.temp)}`,
    feelsLike: `Feels like: ${data.main.feels_like}`,
    wind: `${windSpeed} mph`
  }
};
