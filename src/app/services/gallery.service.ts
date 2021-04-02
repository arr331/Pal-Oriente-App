import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private storage: AngularFireStorage) { }

  getGallery() {
    return this.storage.storage.ref('XXX').listAll();
  }
}
