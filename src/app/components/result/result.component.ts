import { Component, Input } from '@angular/core';
import { WeatherResult } from 'src/app/models/weather.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  @Input() weather: WeatherResult;
  @Input() gottenWeather: boolean;

}
