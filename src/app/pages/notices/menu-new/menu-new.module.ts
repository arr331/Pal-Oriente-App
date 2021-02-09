import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuNewPageRoutingModule } from './menu-new-routing.module';

import { MenuNewPage } from './menu-new.page';
import { NoticeComponent } from '../components/notice/notice.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuNewPageRoutingModule
  ],
  declarations: [MenuNewPage, NoticeComponent]
})
export class MenuNewPageModule {}
