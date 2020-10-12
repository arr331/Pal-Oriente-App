import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipalityMenuPage } from './municipality-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MunicipalityMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipalityMenuPageRoutingModule {}
