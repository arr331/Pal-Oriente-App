import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Coordinate } from 'src/app/interfaces/coordinate';
import { MapService } from '../../services/map.service';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPage implements OnInit {
  coordinatesList: Coordinate[] = [];
  mapRef = null;

  constructor(private loadingCtrl: LoadingController, private mapService: MapService) { }


  public ngOnInit(): void{
    this.mapService.getCordinates().then(data => {
      data.forEach(mun => {
        const coordinates = Object.keys(mun).map(coor => mun[coor]);
        this.coordinatesList.push(...coordinates);
        this.loadMap();
      },);
    });
  }

  public async loadMap() {
    const loading = await this.loadingCtrl.create({
      message : 'Espere por favor'
    });
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: 6.1383542, lng: -75.2729218 },
      zoom: 10
    });
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      for (const item of this.coordinatesList){
        this.addMaker(parseFloat(item.x), parseFloat(item.y), item.name);
      }
      loading.dismiss()
    });
  }

  private addMaker(lat: number, lng: number, title: string) {
    const infoWindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  }
}
