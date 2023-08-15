const search = document.querySelector(".js-search-form");
const weatherCard = document.querySelector(".weather-wrapper");
search.addEventListener("submit", handleSearch);
const convertSecondsToHoursAndMinutes = (seconds)=>{
    const date = new Date(seconds * 1000);
    return `${`${date.getHours()}`.padStart(2, 0)}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};
function handleSearch(evt) {
    evt.preventDefault();
    const searchQuery = evt.target.firstElementChild.value.trim();
    if (!searchQuery) return;
    console.log(searchQuery);
    getWether(searchQuery).then((data)=>{
        console.log(data);
        createCard(data);
    }).catch((error)=>console.log(error));
}
function createCard({ name, main: { temp, feels_like }, clouds: { all }, sys: { sunrise, sunset }, weather: [{ description }] }) {
    sunset = convertSecondsToHoursAndMinutes(sunset);
    sunrise = convertSecondsToHoursAndMinutes(sunrise);
    const weatherData = `<h2 class="city-name">${name}</h2>
          <ul class="weather-info list">
            <li class="weather-info-item">
              <p>Температура: ${temp}</p>
            </li>
            <li class="weather-info-item">
              <p>Відчувається як: ${feels_like}</p>
            </li>
            <li class="weather-info-item">
              <p>Схід сонця: ${sunrise}</p>
            </li>
            <li class="weather-info-item">
              <p>Захід сонця: ${sunset}</p>
            </li>
            <li class="weather-info-item">
              <p>Хмарність: ${all}%</p>
            </li>
            <li class="weather-info-item">
              <p>Погода: ${description}</p>
            </li>
          </ul>`;
    weatherCard.insertAdjacentHTML("beforeEnd", weatherData);
}
function getWether(city) {
    // https://api.openweathermap.org/data/2.5/weather?q=Gijon&appid=95632b02f9162f375a368971925f5209&lang=ua&units=metric
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    const APY_KEY = "95632b02f9162f375a368971925f5209";
    return fetch(`${BASE_URL}?q=${city}&appid=${APY_KEY}&lang=ua&units=metric`).then((response)=>{
        if (!response.ok) throw new Error(response.statusText);
        console.log(response);
        return response.json();
    });
}

//# sourceMappingURL=temp.2c08dd20.js.map
