import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationMenuPageRoutingModule } from './celebration-menu-routing.module';

import { CelebrationMenuPage } from './celebration-menu.page';
import { MasterMenuModule } from 'src/app/components/master-menu/master-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationMenuPageRoutingModule,
    MasterMenuModule
  ],
  declarations: [CelebrationMenuPage]
})
export class CelebrationMenuPageModule {}
