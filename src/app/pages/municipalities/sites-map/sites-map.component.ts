import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
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
    if (this.sites) {
      this.sites = this.sites ? Object.keys(this.sites).map(item => this.sites[item].state ? this.sites[item] : undefined) : [];
      this.sites = this.sites.filter(Boolean);
      this.loadMap();
    }
  }

  public async loadMap(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor',
      duration: 10000,
    });
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('site-map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: this.average('x'), lng: this.average('y') },
      zoom: 13.6
    }), error => {
      console.error(error);
      this.presentAlert();
    };
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      this.sites.forEach(site => this.addMaker(site));
      loading.dismiss();
    }), error => {
      console.error(error);
      this.presentAlert();
    };
  }

  private average(position: string): number {
    let average = 0;
    this.sites.forEach(site => average += parseFloat(site[position]));
    return average = average / this.sites.length;
  }

  private addMaker(site: Site): void {
    const html = `<div style="text-align: center;"> <h3>${site.name}</h3> <img style="padding-bottom: 10px; max-width: 100%;" src="${site.image}"/> <br> <a href="/tabs/sitio" style="font-size: 18px; font-weight: 500;">Ver más...</a> </div>`;
    const infoWindow = new google.maps.InfoWindow({
      content: html
    });
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(site.x), lng: parseFloat(site.y) },
      map: this.mapRef
    });
    marker.addListener('click', async () => {
      infoWindow.open(
        marker.getMap(),
        marker,
      );
      await this.storage.set('site', site);
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
    await alert.onDidDismiss();
  }
}
