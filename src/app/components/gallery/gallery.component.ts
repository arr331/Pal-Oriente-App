import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imageList: string[] = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGallery().then(result => {
      result.items.forEach(itemRef => itemRef.getDownloadURL().then(url => this.imageList.push(url)));
    });
  }

}
