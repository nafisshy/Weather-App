import './style.css';

const weather = {
  apiKey: '891b0139393e7f48501dd2f09c261ec1',
  fetchWeather: (async function name(place) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${this.apiKey}`,
        { mode: 'cors' },
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      alert('Something went wrong while fetching weather data');
    }
  }),
};
weather.fetchWeather('Howrah');
