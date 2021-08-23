import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private db: AngularFireDatabase) { }

  public getAll(): AngularFireList<Region> {
    return this.db.list<Region>(`HOME`, ref => ref.orderByChild('state').equalTo(true));
  }
}
