import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationPageRoutingModule } from './celebration-routing.module';

import { CelebrationPage } from './celebration.page';
import { DescriptionComponent } from './components/description/description.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ActivitiesComponent } from './components/activities/activities.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationPageRoutingModule
  ],
  declarations: [CelebrationPage, DescriptionComponent, CommentsComponent, ActivitiesComponent]
})
export class CelebrationPageModule {}
