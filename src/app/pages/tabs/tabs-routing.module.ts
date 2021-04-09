import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage,
    children: [
      {
        path: 'home', children: [{ path: '', component: HomePage }]
      },
      {
        path: 'home/:region',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/municipality/municipality.module').then(m => m.MunicipalityPageModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '', loadChildren: () => import('../notices/menu-new/menu-new.module').then(m => m.MenuNewPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '', loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
      {
        path: 'municipio/menu',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/municipality-menu/municipality-menu.module').then(m => m.MunicipalityMenuPageModule)
          }
        ]
      },
      {
        path: 'sitios',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/site-menu/site-menu.module').then(m => m.SiteMenuPageModule)
          }
        ]
      },
      {
        path: 'sitio',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/site/site.module').then(m => m.SitePageModule)
          }
        ]
      },
      {
        path: 'celebraciones',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/celebration-menu/celebration-menu.module').then(m => m.CelebrationMenuPageModule)
          }
        ]
      },
      {
        path: 'celebracion',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/celebration/celebration.module').then(m => m.CelebrationPageModule)
          }
        ]
      },
      {
        path: 'informacion',
        children: [
          {
            path: '', loadChildren: () => import('../municipalities/information/information.module').then(m => m.InformationPageModule)
          }
        ]
      },
      {
        path: 'information',
        children: [
          { path: '',
          loadChildren: () => import('../information/menu-information/menu-information.module').then( m => m.MenuInformationPageModule) }
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
export class TabsPageRoutingModule { }
