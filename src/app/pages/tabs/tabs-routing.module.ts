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
      {
        path: 'home/menu/:idMun',
        children: [
          { path: '',
          loadChildren: () => import('../municipalities/municipality-menu/municipality-menu.module').then( m => m.MunicipalityMenuPageModule) }
        ]
      },
      {
        path: 'home/menu/sites/:idMun',
        children: [
          { path: '',
          loadChildren: () => import('../municipalities/site/site.module').then( m => m.SitePageModule) }
        ]
      },
      {
        path: 'home/menu/celebrations/:idMun',
        children: [
          { path: '',
          loadChildren: () => import('../municipalities/celebration/celebration.module').then( m => m.CelebrationPageModule) }
        ]
      },
      {
        path: 'home/menu/information/:idMun',
        children: [
          { path: '',
          loadChildren: () => import('../municipalities/information/information.module').then( m => m.InformationPageModule) }
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
