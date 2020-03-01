import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', env.apiKey);
    return this.http.get(env.apiUrl, { params });
  }

  convertToFarenheight(temp: number): string {
    let t = temp * (9 / 5) - 459.67;
    return t.toFixed(2);
  }
}
