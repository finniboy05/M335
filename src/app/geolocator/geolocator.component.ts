import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocator',
  templateUrl: './geolocator.component.html',
  styleUrls: ['./geolocator.component.scss'],
  standalone: true
})
export class GeolocatorComponent  implements OnInit {

  latitude : number = 0
  longitude : number = 0
  altitude : number | null = 0

  constructor() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.altitude = position.coords.altitude
  }

  ngOnInit() {
    this.getCurrentPosition()
  }

}
