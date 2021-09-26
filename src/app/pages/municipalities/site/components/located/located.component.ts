import { Component, Input, OnChanges } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Site } from '../../../../../interfaces/site';

declare var google;

@Component({
  selector: 'app-located',
  templateUrl: './located.component.html',
  styleUrls: ['./located.component.scss'],
})
export class LocatedComponent implements OnChanges {
  mapRef = null;
  @Input() site: Site;

  constructor(private loadingCtrl: LoadingController, public alertController: AlertController) { }

  ngOnChanges() {
    this.loadMap();
  }

  async loadMap() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor',
      duration: 10000,
    });
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('mapS');
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: Number.parseFloat(this.site.x), lng: Number.parseFloat(this.site.y) },
      zoom: 15
    }), error => {
      console.error(error);
      this.presentAlert();
    };
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      this.addMaker(Number.parseFloat(this.site.x), Number.parseFloat(this.site.y), this.site.name, this.site.image);
      loading.dismiss();
    }), error => {
      console.error(error);
      this.presentAlert();
    };
  }

  private addMaker(lat: number, lng: number, title: string, image: string) {
    const html = `<h3>${title}</h3> <img style="padding-bottom: 10px; max-width: 100%;" src="${image}"/>`;

    const infoWindow = new google.maps.InfoWindow({
      content: html
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef
    });
    marker.addListener('click', () => {
      infoWindow.open(
        marker.getMap(),
        marker,
      );
    });
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje informativo',
      message: 'El mapa no pudo ser cargado, inténtelo más tarde',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
