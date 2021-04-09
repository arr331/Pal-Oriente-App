import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInformationPage } from './menu-information.page';
import { ItemInformationComponent } from '../components/item-information/item-information.component';

const routes: Routes = [
  {
    path: '',
    component: MenuInformationPage
  },
  {
    path: 'tabs/information/info',
    component: ItemInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInformationPageRoutingModule {}
