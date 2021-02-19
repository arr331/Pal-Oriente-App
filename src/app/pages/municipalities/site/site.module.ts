import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitePageRoutingModule } from './site-routing.module';

import { SitePage } from './site.page';
import { DescriptionComponent } from './components/description/description.component';
import { LocatedComponent } from './components/located/located.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SharedPageModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitePageRoutingModule,
    SharedPageModule
  ],
  declarations: [SitePage, DescriptionComponent, LocatedComponent, CommentsComponent]
})
export class SitePageModule {}
