import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent {

  @Input() hasError = false;
  @Input() errorMessage: string;
  @Output() emitCity = new EventEmitter();
  searchForm = this.fb.group({
    city: ['', [Validators.required, Validators.minLength(1)]]
  });

  constructor(
    private fb: FormBuilder
    ) { }

  formSubmitted(city: string) {
    this.emitCity.emit(city);
  }

}
