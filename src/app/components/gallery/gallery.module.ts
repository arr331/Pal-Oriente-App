import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    RouterModule,
    IonicModule.forRoot(),
    CommonModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }