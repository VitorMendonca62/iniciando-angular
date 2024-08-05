import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './page/weather-home/weather-home.component';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [WeatherHomeComponent, WeatherCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
  ]
})
export class WeatherModule { }
