import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';
import { IonHeader, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class WeatherComponent implements OnInit {
  forecastData: any
  temperature: any
  @Input() longitude: number = 0
  @Input() latitude: number = 0

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getForecast();
  }

  async getForecast() {
    // Simulieren der geografischen Position (Breitengrad und Längengrad)
    this.forecastData = await this.weatherService.getCurrentWeatherData(this.latitude, this.longitude);
    console.log(this.forecastData); // Prüfe die erhaltenen Daten in der Konsole
    this.temperature = this.forecastData.main.temp
  }

  getDayOfWeek(dt: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dt * 1000); // Konvertiere UNIX-Timestamp in Millisekunden
    return days[date.getDay()];
  }

  getHourOfDay(dt: number): string {
    const date = new Date(dt * 1000); // Konvertiere UNIX-Timestamp in Millisekunden
    const hour = date.getHours();
    return hour.toString().padStart(2, '0') + ':00'; // Formatierung der Stunden (z. B. 08:00)
  }

  setCoordinates(longitude: number, latitude: number) {
    this.longitude = longitude
    this.latitude = latitude
  }
}