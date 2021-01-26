import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  municipalityList = {};
  comentarios = {};
  region: any;

  constructor(private db: AngularFireDatabase) { }
  
  async getMunicipios(region: string) {
    this.region = region;
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

  async getComentarios(sitio: string, municipio: string) {
    if (!this.comentarios[sitio]) {
      this.comentarios = {... this.comentarios, [sitio] : []}
      await this.db.list(`${this.region}/COMMENTS/${municipio}/${sitio}`).query.once('value').then(data => {
        data.forEach(com => { this.comentarios[sitio].push(com.val());
        });
      });
   }
    return this.comentarios[sitio];
  }

}
