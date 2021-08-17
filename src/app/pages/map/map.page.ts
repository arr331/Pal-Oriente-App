import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
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

  constructor(private loadingCtrl: LoadingController, private storage: Storage, 
              private municipalityService: MunicipalityService, public alertController: AlertController) { }

  ngOnInit(): void {
    this.municipalityService.getMunicipalitiesInfo('ALTIPLANO').then(answer => {
      this.municipalityList = answer;
      this.loadMap();
    });
  }

  public async loadMap() {
    const loading = await this.loadingCtrl.create({
      message : 'Espere por favor',
      duration : 10000,
    });
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: 6.1383542, lng: -75.2729218 },
      zoom: 10
    }), error =>{
      console.error(error);
      this.presentAlert();
    };
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      this.municipalityList.forEach((mun, index) => this.addMaker(parseFloat(mun.x), parseFloat(mun.y), mun.name, mun.idMun));
      loading.dismiss();
    }), error =>{
      console.error(error);
      this.presentAlert();
    };
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje informativo',
      message: 'El mapa no pudo ser cargado, intentelo más tarde',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
