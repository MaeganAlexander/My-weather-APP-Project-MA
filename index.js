function showCountry(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  form.textContent = "showCountry";
}

let showCountryButton = document.querySelector("#show-country-btn");
showCountryButton.addEventListener("click", showCountry);

let now = new Date();
let li = document.querySelector("li.word-Date");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
li.word-Date.innerHTML= '${day} ${hours}: ${minutes}`;

function showCounty(response) {
  let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
      let h1 = document.querySelector("h1.gmt");
        h1.innerHTML = temperature;
      }


     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
     let units = "metric";
    let city = "London";
    let apiUrl = https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units};

    axios.get(apiUrl).then(showCounty);


function showPosition(position) {
let geoDial = document.querySelector(".geoDial");
geoDial.innerHTML = `Your latitude is ${position.coords.latitude},
 and your longitude is ${position.coords.longitude}.`;
}

 function getCurrentPosition() {
navigator.geolocation.getCurrentPosition(showPosition);
}

let geoDialButton = document.querySelector(".geoDial");
geoDialButton.addEventListener("click", getCurrentPosition);