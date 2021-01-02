import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  municipalityList = {};

  constructor(private db: AngularFireDatabase) { }

  async getMunicipios(region: string) {
    if (!this.municipalityList[region]) {
      this.municipalityList = {... this.municipalityList, [region] : []}
      await this.db.list(`${region}/MUNICIPALITIES`).query.once('value').then(data => {
        data.forEach(mun => { this.municipalityList[region].push(mun.val()) });
      });
    }
    return this.municipalityList[region];
  }

  getMunicipalitiesById(idMun, region) {
    return this.municipalityList[region].filter(mun => mun.idMun == idMun)[0];
  }
}
