import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Notice } from '../interfaces/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private db: AngularFireDatabase) { }

  public getNotices(): AngularFireList<Notice> {
    return this.db.list<Notice>(`NEWS`, ref => ref.orderByChild('state').equalTo(true));
  }
}
