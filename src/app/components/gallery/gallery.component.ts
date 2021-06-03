import { Component, Input, OnChanges } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Storage } from '@ionic/storage';
import { Site } from 'src/app/interfaces/site';
import { GalleryService } from 'src/app/services/gallery.service';
import { Celebration } from '../../interfaces/celebration';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnChanges {
  imageList: string[];
  @Input() sitio: Site;
  @Input() celebration: Celebration;

  constructor(private photoViewer: PhotoViewer, private galleryService: GalleryService, 
              private storage: Storage, private loadingController: LoadingController) { }

  ngOnChanges(): void {
    this.imageList = []
    this.storage.get('ids').then(ids => {
      const itemPath = this.sitio ? 'SITES' : 'CELEBRATIONS';
      this.galleryService.getGallery(ids.region, ids.idMun, this.sitio?.idSite || this.celebration?.idCelebration, itemPath).then(result => {
        result.items.forEach(itemRef => itemRef.getDownloadURL().then(url => this.imageList.push(url)));
      });
    });
    this.presentLoading();
  }

  showImage(image: string) {
    this.photoViewer.show(image,this.celebration?.name || this.sitio?.name,{share: true});
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
