function changeCard(city, temp, icon, description, humidity, wind, feelsLike) {
  const cityElement = document.querySelector('.city');
  const tempElement = document.querySelector('.temp');
  const iconElement = document.querySelector('.icon');
  const descriptionElement = document.querySelector('.description');
  const humidityElement = document.querySelector('.humidity');
  const windElement = document.querySelector('.wind');
  const feelsLikeElement = document.querySelector('.feels-like');
  cityElement.textContent = `Weather in ${city}`;
  tempElement.textContent = `${temp}°C`;
  iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
  descriptionElement.textContent = description;
  humidityElement.textContent = `Humidity: ${humidity}%`;
  windElement.textContent = `Wind: ${wind} km/hr`;
  feelsLikeElement.textContent = `Feels Like: ${feelsLike}°C`;
}

function changeBackground(city) {
  document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${city})`;
}

export default { changeCard, changeBackground };
