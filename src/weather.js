const weather = {
  apiKey: '891b0139393e7f48501dd2f09c261ec1',
  fetchWeather: (async function name(place) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${this.apiKey}`,
        { mode: 'cors' },
      );
      const data = await response.json();
      return this.extractWeather(data);
    } catch (e) {
      console.log(e);
      alert('Something went wrong while fetching weather data');
    }
  }),
  extractWeather(data) {
    const { name } = data;
    const { icon, main } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
    return {
      name, icon, main, temp, humidity, feels_like, speed,
    };
  },
};

export default weather;
