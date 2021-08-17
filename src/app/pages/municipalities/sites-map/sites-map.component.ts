import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Storage } from '@ionic/storage';
import { Site } from 'src/app/interfaces/site';
declare var google;

@Component({
  selector: 'app-sites-map',
  templateUrl: './sites-map.component.html',
  styleUrls: ['./sites-map.component.scss']
})
export class SitesMapComponent implements OnInit {
  @Input() sites: Site[];
  mapRef = null;

  constructor(private loadingCtrl: LoadingController, private storage: Storage,
    public alertController: AlertController) { }

  ngOnInit(): void {
    if(this.sites) {
      this.sites = this.sites ? Object.keys(this.sites).map(item => this.sites[item].state ? this.sites[item]: undefined) : [];
      this.sites = this.sites.filter(Boolean);
      this.loadMap();
    }
  }

  public async loadMap(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message : 'Espere por favor',
      duration : 10000,
    });
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('site-map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: 6.1383542, lng: -75.2729218 },
      zoom: 10
    }), error =>{
      console.error(error);
      this.presentAlert();
    };
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      this.sites.forEach((mun, index) => this.addMaker(parseFloat(mun.x), parseFloat(mun.y), mun.name, mun.image, mun.idSite));
      loading.dismiss();
    }), error =>{
      console.error(error);
      this.presentAlert();
    };
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
