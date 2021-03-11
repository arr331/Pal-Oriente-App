import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MapService } from '../../services/map.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  mapRef = null;
  cordinatesList = [];

  constructor(private loadingCtrl: LoadingController, private mapService: MapService) { }

  ngOnInit() {
    this.loadMap();
    this.mapService.getCordinates().then((data) => {
      this.cordinatesList = data;
      console.log(this.cordinatesList);
    });
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: {lat:6.1383542, lng: -75.2729218 },
      zoom: 10
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      for (var item of this.cordinatesList)
        this.addMaker(parseFloat(item.x), parseFloat(item.y),item.nombre);
    });
  }

  private addMaker(lat: number, lng: number, title: string) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: title
    });
  }

}
