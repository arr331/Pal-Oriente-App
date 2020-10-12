import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  municipalities: any;

  constructor(private db: AngularFireDatabase) { }

  getMunicipios(region: string) {
    return this.db.list(`${region}/MUNICIPALITIES`);
  }
}
