import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private storage: AngularFireStorage) { }

  getGallery(region: string, idMun: string, idSite: string, itemPath: string) {
    return this.storage.storage.ref(`${region}/MUNICIPALITIES/${idMun}/${itemPath}/${idSite}/gallery`).listAll();
  }
}
