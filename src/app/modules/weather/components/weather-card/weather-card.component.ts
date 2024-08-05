import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import {
  faThermometerEmpty,
  faThermometerFull,
  faDroplet,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input() weatherData!: WeatherData;
  @ViewChild('mainImage') mainImage!: ElementRef<HTMLImageElement>;

  faThermometerEmpty = faThermometerEmpty;
  faThermometerFull = faThermometerFull;
  faDroplet = faDroplet;
  faWind = faWind;

  constructor() {}
  assetsPath = 'background-image: url("/assets/';

  pathsImages = {
    sun: 'sun.jpg',
    cold: 'cold1.jpg',
  };

  takePath() {
    return `${this.assetsPath}${
      this.pathsImages[this.weatherData.main.temp > 15 ? 'sun' : 'cold']
    }")`;
  }
}
