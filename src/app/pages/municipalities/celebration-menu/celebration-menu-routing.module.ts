import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrationMenuPage } from './celebration-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrationMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrationMenuPageRoutingModule {}
