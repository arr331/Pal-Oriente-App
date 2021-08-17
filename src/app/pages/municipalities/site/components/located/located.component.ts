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
  @Input() site: Site;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    const mapEle: HTMLElement = document.getElementById('mapS');
    this.mapRef = new google.maps.Map(mapEle, {
      center: {lat: Number.parseFloat(this.site.x) , lng: Number.parseFloat(this.site.y)},
      zoom: 15
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(Number.parseFloat(this.site.x), Number.parseFloat(this.site.y), this.site.name);
    });
  }

  private addMaker(lat: number, lng: number, title: string) {
    const infoWindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
      positen: { lat, lng },
      map: this.mapRef,
      title
    });
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  }
}
