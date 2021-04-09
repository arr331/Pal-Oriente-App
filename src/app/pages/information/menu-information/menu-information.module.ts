import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInformationPageRoutingModule } from './menu-information-routing.module';

import { MenuInformationPage } from './menu-information.page';
import { ItemInformationComponent } from '../components/item-information/item-information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInformationPageRoutingModule
  ],
  declarations: [MenuInformationPage, ItemInformationComponent]
})
export class MenuInformationPageModule {}
