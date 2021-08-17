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

  public async loadMap(): Promise<void> {
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
      this.municipalityList.forEach(mun => this.addMaker(parseFloat(mun.x), parseFloat(mun.y), mun.name, mun.image, mun.idMun));
    });
  }

  private addMaker(lat: number, lng: number, title: string, image: string, idMun: string): void {
    const html = `<div class="content"> <h3>${title}</h3> <img style="padding-bottom: 10px; max-width: 100%;" src="${image}"/> <br> <a href="/tabs/informacion" class="link">Ver más...</a> </div>`;

    const infoWindow = new google.maps.InfoWindow({
      content: html
    });
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title,
      idMun
    });
    marker.addListener('click', async () => {
      infoWindow.open(
        marker.getMap(),
        marker,
      );
      await this.storage.set('ids', {region: 'ALTIPLANO', idMun: marker.idMun});
    });
  }
}
