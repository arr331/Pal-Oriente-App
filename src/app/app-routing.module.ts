import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'municipality',
    loadChildren: () => import('./pages/municipalities/municipality/municipality.module').then( m => m.MunicipalityPageModule)
  },
  {
    path: 'municipality-menu',
    loadChildren: () => import('./pages/municipalities/municipality-menu/municipality-menu.module').then( m => m.MunicipalityMenuPageModule)
  },
  {
    path: 'site',
    loadChildren: () => import('./pages/municipalities/site/site.module').then( m => m.SitePageModule)
  },
  {
    path: 'celebration',
    loadChildren: () => import('./pages/municipalities/celebration/celebration.module').then( m => m.CelebrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
