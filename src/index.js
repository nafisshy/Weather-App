import './style.css';
import weather from './weather';
import DOM from './DOM';
import img from './smilingsun.png';


document.querySelector('.loading').src = img;
weather.fetchWeather('Tokyo').then((data) => {
  const {
    name, icon, main, temp, humidity, feels_like, speed,
  } = data;
  DOM.changeCard(name, temp, icon, main, humidity, speed, feels_like);
});
async function changeDisplay() {
  const searchBar = document.querySelector('.search-bar');
  DOM.changeBackground(searchBar.value);
  weather.fetchWeather(searchBar.value).then((data) => {
    const {
      name, icon, main, temp, humidity, feels_like, speed,
    } = data;
    DOM.changeCard(name, temp, icon, main, humidity, speed, feels_like);
  });
}

const searchButton = document.querySelector('button');
searchButton.addEventListener('click', changeDisplay);
