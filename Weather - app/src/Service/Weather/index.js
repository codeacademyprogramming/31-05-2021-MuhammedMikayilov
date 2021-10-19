import { HttpClient } from "../../HttpClient";

class WeatherService extends HttpClient {
  constructor() {
    super("http://api.openweathermap.org/data/2.5/");
  }

  getWeathers(url) {
    return this.get(`weather?q=${url}&appid=615eec4aa7d88d615af9ff2b0561977c
    `);
  }
}

export const weatherService = new WeatherService();
