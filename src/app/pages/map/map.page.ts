import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Storage } from '@ionic/storage';
import { Region } from 'src/app/interfaces/region';
import { RegionService } from 'src/app/services/region.service';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPage implements OnInit {
  regionList: Region[];
  municipalityList: Municipality[] = [];
  mapRef = null;

  constructor(
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private regionService: RegionService,
    private municipalityService: MunicipalityService,
    public alertController: AlertController
  ) { }

  ngOnInit(): void {
    this.regionService.getAll().valueChanges().subscribe(async regions => {
      this.regionList = regions;
      await Promise.all(
        regions.map(async region => await this.setMunicipality(region.id))
      );
      this.loadMap();
    });
  }

  async setMunicipality(idRegion: string): Promise<void> {
    const list: Municipality[] = await this.municipalityService.getMunicipalitiesInfo(idRegion);
    list.forEach(municipality => municipality.idRegion = idRegion);
    this.municipalityList = [...this.municipalityList, ...list];
  }

  public async loadMap(): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor',
      duration: 10000,
    });
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: this.average('x'), lng: this.average('y') },
      zoom: 10
    }, error => {
      console.error(error);
      this.presentAlert();
    });
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      this.municipalityList.forEach(mun => this.addMaker(mun));
      loading.dismiss();
    }, error => {
      console.error(error);
      this.presentAlert();
    });
  }

  private average(position: string): number {
    let average = 0;
    this.municipalityList.forEach(mun => average += parseFloat(mun[position]));
    return average = average / this.municipalityList.length;
  }

  private addMaker(municipality: Municipality): void {
    const html = `<div class="content"> <h3>${municipality.name}</h3> <img style="padding-bottom: 10px; max-width: 100%;" src="${municipality.image}"/> <br> <a href="/tabs/informacion" class="link">Ver más...</a> </div>`;

    const infoWindow = new google.maps.InfoWindow({
      content: html
    });
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(municipality.x), lng: parseFloat(municipality.y) },
      map: this.mapRef,
      title: municipality.name,
      idMun: municipality.idMun
    });
    marker.addListener('click', async () => {
      infoWindow.open(
        marker.getMap(),
        marker,
      );
      await this.storage.set('ids', { region: municipality.idRegion, idMun: marker.idMun });
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
