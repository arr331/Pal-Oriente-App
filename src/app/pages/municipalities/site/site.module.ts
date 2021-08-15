import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SitePageRoutingModule } from './site-routing.module';
import { SitePage } from './site.page';
import { LocatedComponent } from './components/located/located.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitePageRoutingModule,
    SharedModule,
    GalleryModule
  ],
  declarations: [SitePage, LocatedComponent]
})
export class SitePageModule {}
