import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  mapRef = null;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: {lat:6.1383542, lng: -75.2729218 },
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(6.1383542, -75.2729218);
    });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

}
