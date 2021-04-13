import { Component, Input, OnChanges } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Site } from 'src/app/interfaces/site';
import { GalleryService } from 'src/app/services/gallery.service';
import { Celebration } from '../../interfaces/celebration';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnChanges {
  imageList: string[];
  @Input() sitio: Site;
  @Input() celebration: Celebration;

  constructor(private galleryService: GalleryService, private storage: Storage) { }

  ngOnChanges(): void {
    this.imageList = []
    this.storage.get('ids').then(ids => {
      const itemPath = this.sitio ? 'SITES' : 'CELEBRATIONS';
      this.galleryService.getGallery(ids.region, ids.idMun, this.sitio?.idSite || this.celebration?.idCelebration, itemPath).then(result => {
        result.items.forEach(itemRef => itemRef.getDownloadURL().then(url => this.imageList.push(url)));
      });
    });
  }
}
