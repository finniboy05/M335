import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather/weather.service'
import { HttpClient } from '@angular/common/http';
import { WeatherComponent } from '../weather/weather.component';
import { GeolocatorComponent } from '../geolocator/geolocator.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, WeatherComponent],
})
export class Tab1Page {

  longitude: number = 0
  latitude: number = 0

  constructor(private weatherService: WeatherService) {
    
  }

  ngOnInit() {
    var geolocatorComponent = new GeolocatorComponent()
    this.longitude = geolocatorComponent.longitude
    this.latitude = geolocatorComponent.latitude
    console.log(geolocatorComponent)
  }

}
