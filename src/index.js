import './style.css';
import weather from './weather';
import DOM from './DOM';
import img from './smilingsun.png';

document.querySelector('.loading').src = img;
const loading = document.querySelector('#loading-icon');
weather.fetchWeather('Tokyo').then((data) => {
  const {
    name, icon, main, temp, humidity, feels_like, speed,
  } = data;
  DOM.changeCard(name, temp, icon, main, humidity, speed, feels_like);
  loading.classList.add('invisible');
});
async function changeDisplay() {
  loading.classList.remove('invisible');
  const searchBar = document.querySelector('.search-bar');
  DOM.changeBackground(searchBar.value);
  weather.fetchWeather(searchBar.value).then((data) => {
    const {
      name, icon, main, temp, humidity, feels_like, speed,
    } = data;
    DOM.changeCard(name, temp, icon, main, humidity, speed, feels_like);
    loading.classList.add('invisible');
  });
}

const searchButton = document.querySelector('button');
searchButton.addEventListener('click', changeDisplay);
