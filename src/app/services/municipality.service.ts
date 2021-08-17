import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from 'angularfire2/database';
import { Municipality } from '../interfaces/municipality';
import { Commentary } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityService {
  municipalityList = {};
  comentarios = {};
  region: string;
  idMun: string;

  constructor(private db: AngularFireDatabase) {}

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
    return this.municipalityList[region];
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

  public getAll(region: string, municipality: string, site: string): AngularFireList<Commentary> {
    return this.db.list(`${region}/COMMENTS/${municipality}/${site}`);
  }

  public saveCom(com: Commentary, idSitio: string, region: string, idMun: string) {
    com.idOpinion = com.idOpinion || this.db.createPushId();
    return this.db
      .list(`${region}/COMMENTS/${idMun}/${idSitio}`)
      .update(com.idOpinion, com);
  }

  public deleteCom(idOpinion: string, idSitio: string, region: string, idMun: string) {
    return this.db
      .list(`${region}/COMMENTS/${idMun}/${idSitio}`)
      .remove(idOpinion);
  }
}
