import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Notice } from '../interfaces/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  noticeList = [];

  constructor(private db: AngularFireDatabase) { }

  async getNotices(){
   await this.db.list(`NEWS`).query.once('value').then(data => {
      data.forEach(com => {
        this.noticeList.push(com.val());
      });
   });
  return this.noticeList;
  }
}
