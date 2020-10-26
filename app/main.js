import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ImageController from "./Controllers/ImageController.js";


class App {
  constructor() {
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
  }
}


window["app"] = new App();
