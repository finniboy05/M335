import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ed27c092cd6a1dec666b5b39f69a4d69';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  // Methode, um Wetterdaten abzurufen
  getCurrentWeatherData(latitude: number, longitude: number) {
    const url = `${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;

    return this.http.get(url).toPromise();
  }
}