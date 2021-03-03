import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterMenuComponent } from './master-menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MasterMenuComponent],
  imports: [
    RouterModule,
    IonicModule.forRoot(),
    CommonModule
  ],
  exports: [MasterMenuComponent]
})
export class MasterMenuModule { }
