import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Municipality } from '../interfaces/municipality';
import { Commentary } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  municipalityList = {};
  comentarios = {};
  region: string;
  idMun: string;

  constructor(private db: AngularFireDatabase) { }

  async getMunicipalitiesInfo(region: string) {
    this.region = region;
    if (!this.municipalityList[region]) {
      this.municipalityList = { ... this.municipalityList, [region]: [] }
      await this.db.list(`${region}/MUNICIPALITIESINFO`).query.once('value').then(data => {
        data.forEach(mun => { this.municipalityList[region].push(mun.val()) });
      });
    }
    return this.municipalityList[region];
  }

  getMunicipality(region: string, idMun: string): AngularFireObject<Municipality> {
    return this.db.object(`${region}/MUNICIPALITIES/${idMun}`);
  }

  getMunicipalitiesById(idMun, region) {
    return this.municipalityList[region].filter(mun => mun.idMun == idMun)[0];
  }

  async getComentarios(sitio: string, municipio: string) {
    if (!this.comentarios[sitio]) {
      this.comentarios = { ... this.comentarios, [sitio]: [] }
      await this.db.list(`${this.region}/COMMENTS/${municipio}/${sitio}`).query.once('value').then(data => {
        data.forEach(com => {
          this.comentarios[sitio].push(com.val());
        });
      });
    }
    return this.comentarios[sitio];
  } 

  getCom(sitio: string, municipio: string): AngularFireList<Commentary> {
    return this.db.list(`${this.region}/COMMENTS/${municipio}/${sitio}`);
  }

  saveCom(id: string, com, idSitio: string, region: string, idMun: string) {
    id = id ? id : this.db.createPushId();
    com.id = id;

    console.log(`${region}/COMMENTS/${idMun}/${idSitio}`);
    return this.db.list(`${region}/COMMENTS/${idMun}/${idSitio}`).update(id, com);
  }
}
