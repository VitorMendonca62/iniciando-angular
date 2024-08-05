import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../../../services/weather.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.css',
})
export class WeatherHomeComponent implements OnInit {
  initialCity = 'São Paulo';
  data!: WeatherData;
  
  faSearch = faSearch

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCity);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response: WeatherData) => {
        this.data = response;
      },
      error: (error) => console.log('ERRO'),
    });
  }

  onSubmit() {
    this.getWeatherData(this.initialCity);
  }
}
