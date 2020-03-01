import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherResult } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather: WeatherResult;
  hasError: boolean;
  errorMessage: string;
  gottenWeather: boolean;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.gottenWeather = false;
    this.weather = new WeatherResult(null, null, null, null, null, null);
    this.hasError = false;
  }

  getWeather(city: string) {
    this.weatherService.getWeatherData(city).subscribe(this.onSuccess.bind(this), this.onError.bind(this));
  }

  onSuccess(data: any) {
    this.hasError = false;
    this.weather.description = data.weather[0].description;
    this.weather.name = data.name;
    this.weather.icon = data.weather[0].icon;
    this.weather.feelsLike = this.weatherService.convertToFarenheight(data.main.feels_like);
    this.weather.windsSpeed = data.wind.speed;
    this.weather.temp = this.weatherService.convertToFarenheight(data.main.temp);
    this.gottenWeather = true;
  }

  onError(error: any) {
    this.hasError = true;
    this.errorMessage = error.error.message;
    this.gottenWeather = false;
  }
}
