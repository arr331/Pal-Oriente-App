import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Site } from 'src/app/interfaces/site';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imageList: string[] = [];
  @Input() sitio: Site;

  constructor(private galleryService: GalleryService, private storage: Storage) { }

  ngOnInit(): void {
    this.storage.get('ids').then(ids => {
      this.galleryService.getGallery(ids.region, ids.idMun, this.sitio.idSite).then(result => {
        result.items.forEach(itemRef => itemRef.getDownloadURL().then(url => this.imageList.push(url)));
      });
    });
  }

}
