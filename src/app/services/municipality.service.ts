import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, } from 'angularfire2/database';
import { Municipality } from '../interfaces/municipality';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityService {
  municipalityList = {};
  comentarios = {};
  region: string;
  idMun: string;

  constructor(private db: AngularFireDatabase) { }

  public async getMunicipalitiesInfo(region: string) {
    this.region = region;
    if (!this.municipalityList[region]) {
      this.municipalityList = { ...this.municipalityList, [region]: [] };
      await this.db
        .list(`${region}/MUNICIPALITIESINFO`)
        .query.once('value')
        .then((data) => {
          data.forEach((mun) => {
            this.municipalityList[region].push(mun.val());
          });
        });
    }
    return this.municipalityList[region].filter((mun) => mun.state);
  }

  public getMunicipality(
    region: string,
    idMun: string
  ): AngularFireObject<Municipality> {
    return this.db.object(`${region}/MUNICIPALITIES/${idMun}`);
  }

  public getMunicipalitiesById(idMun, region) {
    return this.municipalityList[region].filter((mun) => mun.idMun === idMun)[0];
  }
}
