import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteMenuPage } from './site-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SiteMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteMenuPageRoutingModule {}
