import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunicipalityMenuPageRoutingModule } from './municipality-menu-routing.module';

import { MunicipalityMenuPage } from './municipality-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunicipalityMenuPageRoutingModule
  ],
  declarations: [MunicipalityMenuPage]
})
export class MunicipalityMenuPageModule {}
