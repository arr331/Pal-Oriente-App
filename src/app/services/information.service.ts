import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  informationList = [];

  constructor(private db: AngularFireDatabase) { }

    async getInformation(){
      await this.db.list(`PLACEINFO`).query.once('value').then(data => {
         data.forEach(com => {
           this.informationList.push(com.val());
         });
      });
     return this.informationList;
    }
}
