import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  municipalityList = [];

  constructor(private db: AngularFireDatabase) { }

  async getMunicipios(region: string) {
    console.log('Estoy en el servicio', this.municipalityList);
    if (this.municipalityList.length === 0) {
      await this.db.list(`${region}/MUNICIPALITIES`).query.once('value').then(data => {
        data.forEach(mun => { this.municipalityList.push(mun.val()) });
      });
      console.log(this.municipalityList, 'Recupero desde fireb');  
    }
    return this.municipalityList;
  }

  getMunicipalitiesById(idMun) {
    return this.municipalityList.filter(mun => mun.idMun == idMun)[0];
  }
}
