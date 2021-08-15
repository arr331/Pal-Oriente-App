import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CelebrationPageRoutingModule } from './celebration-routing.module';
import { CelebrationPage } from './celebration.page';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryModule } from '../../../components/gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationPageRoutingModule,
    SharedModule,
    GalleryModule
  ],
  declarations: [CelebrationPage, ActivitiesComponent]
})
export class CelebrationPageModule {}
