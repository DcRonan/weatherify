const getWeatherData = async city => {
  const response = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=${city}&appid=b65d7b54d34b0aecf82c86c39aabf664`,
  );
  const data = await response.json();
  return data;
};

export default getWeatherData;
