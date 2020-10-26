import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather(x) {
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  if (x == 1) {
    document.getElementById('weather').innerHTML = ProxyState.weather.celcius
  } if (x == 2) {
    document.getElementById('weather').innerHTML = ProxyState.weather.fahrenheit
  }
  else { document.getElementById('weather').innerHTML = ProxyState.weather.kelvin }
}

export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
  changeCelsius() {
    try {
      weatherService.changeCelsius()
    }
    catch (e) {
      console.error(e)
    }
    drawWeather()
  }
  changeFahrenheit() {
    try {
      weatherService.changeFahrenheit()
    }
    catch (e) {
      console.error(e)
    }
  }
}
