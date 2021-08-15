import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage,
    children: [
      { path: 'home', component: HomePage },
      {
        path: 'news',
        loadChildren: () => import('../notices/menu-new/menu-new.module').then(m => m.MenuNewPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'sitios',
        loadChildren: () => import('../municipalities/site-menu/site-menu.module').then(m => m.SiteMenuPageModule)
      },
      {
        path: 'sitio',
        loadChildren: () => import('../municipalities/site/site.module').then(m => m.SitePageModule)
      },
      {
        path: 'celebraciones',
        loadChildren: () => import('../municipalities/celebration-menu/celebration-menu.module')
        .then(m => m.CelebrationMenuPageModule)
      },
      {
        path: 'celebracion',
        loadChildren: () => import('../municipalities/celebration/celebration.module').then(m => m.CelebrationPageModule)
      },
      {
        path: 'informacion',
        children:  [{path: '',
        loadChildren: () => import('../municipalities/information/information.module').then(m => m.InformationPageModule)
      }]
      },
      {
        path: 'information',
        loadChildren: () => import('../information/menu-information/menu-information.module').then( m => m.MenuInformationPageModule)
      },
      {
        path: ':region',
        loadChildren: () => import('../municipalities/municipality/municipality.module').then(m => m.MunicipalityPageModule)
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
export class TabsPageRoutingModule { }
