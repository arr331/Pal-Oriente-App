import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageGestorService {

  constructor(private storage: Storage) { }

  public async getFromStorage(params: any) {
    const get = [];
    params.forEach(p => {
      get.push(this.storage.get(p));
    });
    return this.getObjectStorage(params, await Promise.all(get)) ;
  }

  public setToStorage(params: any) {
    params.map(p => {
      this.storage.set(p.key, p.value);
    });
  }

  private getObjectStorage(args: any[], storage: any): any {
    let obj = {};
    args.map(i => {
      obj = {...obj, [i]: storage[args.indexOf(i)]};
    });
    return obj;
  }

}
