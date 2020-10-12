import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          { path: '', component: HomePage }
        ]
      },
      {
        path: 'home/:region',
        children: [
          { path: '',
          loadChildren: () => import('../municipalities/municipality/municipality.module').then( m => m.MunicipalityPageModule) }
        ]
      },
      { path: '', redirectTo: '/tabs/home' }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
