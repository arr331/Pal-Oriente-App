import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Storage } from '@ionic/storage';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPage implements OnInit {
  municipalityList: Municipality[] = [];
  mapRef = null;

  constructor(private loadingCtrl: LoadingController, private storage: Storage, private municipalityService: MunicipalityService) { }

  ngOnInit(): void {
    this.municipalityService.getMunicipalitiesInfo('ALTIPLANO').then(answer => {
      this.municipalityList = answer;
      this.loadMap();
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
      loading.dismiss();
      this.municipalityList.forEach((mun, index) => this.addMaker(parseFloat(mun.x), parseFloat(mun.y), mun.name, mun.idMun));
    });
  }

  private addMaker(lat: number, lng: number, title: string, index: string) {
    const z = `<div id="xw">    <h4 >${title}</h4>  <a href="/tabs/informacion">ver mas</a>    </div>`;

    const infoWindow = new google.maps.InfoWindow({
      content: z
    });
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title,
      index
    });
    marker.addListener('click', async () => {
      infoWindow.open(
        marker.getMap(),
        marker,
      );
      await this.storage.set('ids', {region: 'ALTIPLANO', idMun: marker.index});
    });
  }
}
