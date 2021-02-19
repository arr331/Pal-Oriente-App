import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  municipalityList = {};
  comentarios = {};
  region: any;

  constructor(private db: AngularFireDatabase) { }

  
  async getMunicipalitiesInfo(region: string) {
    this.region = region;
    if (!this.municipalityList[region]) {
      this.municipalityList = { ... this.municipalityList, [region]: [] }
      await this.db.list(`${region}/MUNICIPALITIES`).query.once('value').then(data => {
        data.forEach(mun => { this.municipalityList[region].push(mun.val()) });
      });
    }
    return this.municipalityList[region];
  }

  descomponer(){
    this.municipalityList
  }
}
