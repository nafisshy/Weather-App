import './style.css';
import weather from './weather';
import DOM from './DOM';

weather.fetchWeather('London').then((data) => {
  const {
    name, icon, main, temp, humidity, feels_like, speed,
  } = data;
  DOM.changeCard(name, temp, icon, main, humidity, speed, feels_like);
});
