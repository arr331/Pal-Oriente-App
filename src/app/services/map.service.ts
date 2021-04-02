import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  cordinatesList = [];

  constructor(private db: AngularFireDatabase) { }

  
  async getCordinates() {
    await this.db.list(`COORDINATES`).query.once('value').then(data => {
      data.forEach(com => {
        this.cordinatesList.push(com.val());
      });
   });
   return this.cordinatesList;
  }

}
