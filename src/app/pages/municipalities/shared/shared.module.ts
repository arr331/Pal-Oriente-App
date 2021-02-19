import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';
import { SharedPage } from './shared.page';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SharedPage, ModalComponent]
})
export class SharedPageModule {}
