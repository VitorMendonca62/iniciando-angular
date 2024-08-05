import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = '88540b517b0ed5ec64836c636d2de596';
  private API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  constructor(private htppClient: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.htppClient.get(
      `${this.API_URL}?q=${cityName}&units=metric&mode=json&APPID=${this.API_KEY}`
    );
  }
}
