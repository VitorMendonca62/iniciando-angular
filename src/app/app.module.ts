import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';
import { WeatherModule } from './modules/weather/weather.module';
// import { WeatherHomeComponent } from './modules/wheater/page/weather-home/weather-home.component';


@NgModule({
  declarations: [AppComponent ],
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    WeatherModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
