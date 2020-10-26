import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
  async changeCelsius() {
    // let celsius = ProxyState.weather - 273.15

  }
}

const weatherService = new WeatherService();
export default weatherService;