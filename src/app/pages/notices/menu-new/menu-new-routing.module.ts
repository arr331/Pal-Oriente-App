import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNewPage } from './menu-new.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNewPageRoutingModule {}
