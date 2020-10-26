import { ProxyState } from "../AppState.js";
import Weather from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
  async changeCelsius() {
    let celcius = ProxyState.weather.kelvin - 273.13
    new Weather(celcius)
  }
  async changeFahrenheit() {

  }
}

const weatherService = new WeatherService();
export default weatherService;