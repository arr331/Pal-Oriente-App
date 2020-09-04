import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  municipalities: any;

  constructor(private fireBase: AngularFireDatabase) { }

  getMunicipios() {
    return this.fireBase.list('ALTIPLANO/MUNICIPALITIES');
  }
}
