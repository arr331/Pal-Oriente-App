import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { InfoItem } from '../interfaces/info-item';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private db: AngularFireDatabase) { }

  getInformation() {
    return this.db.list<InfoItem>(`PLACEINFO`);
  }
}
