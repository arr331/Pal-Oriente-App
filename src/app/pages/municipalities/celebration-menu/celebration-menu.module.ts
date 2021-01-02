import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationMenuPageRoutingModule } from './celebration-menu-routing.module';

import { CelebrationMenuPage } from './celebration-menu.page';
import { MasterMenuComponent } from 'src/app/components/master-menu/master-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationMenuPageRoutingModule
  ],
  declarations: [CelebrationMenuPage, MasterMenuComponent]
})
export class CelebrationMenuPageModule {}
