import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Site } from '../../../../../interfaces/site';

declare var google;

@Component({
  selector: 'app-located',
  templateUrl: './located.component.html',
  styleUrls: ['./located.component.scss'],
})
export class LocatedComponent implements OnInit {

  mapRef = null;
  @Input() sitio : Site;

  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: {lat: Number.parseFloat(this.sitio.x) , lng: Number.parseFloat(this.sitio.y)},
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(Number.parseFloat(this.sitio.x), Number.parseFloat(this.sitio.y));
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
