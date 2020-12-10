import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteMenuPageRoutingModule } from './site-menu-routing.module';

import { SiteMenuPage } from './site-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteMenuPageRoutingModule
  ],
  declarations: [SiteMenuPage]
})
export class SiteMenuPageModule {}
