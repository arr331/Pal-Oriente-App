import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginGuard } from './services/login/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'terms',
    loadChildren: () => import('./components/terms/terms.module').then( m => m.TermsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'municipality-menu',
    loadChildren: () => import('./pages/municipalities/municipality-menu/municipality-menu.module').then( m => m.MunicipalityMenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'site',
    loadChildren: () => import('./pages/municipalities/site/site.module').then( m => m.SitePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'celebration',
    loadChildren: () => import('./pages/municipalities/celebration/celebration.module').then( m => m.CelebrationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/municipalities/information/information.module').then( m => m.InformationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'site-menu',
    loadChildren: () => import('./pages/municipalities/site-menu/site-menu.module').then( m => m.SiteMenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'celebration-menu',
    loadChildren: () => import('./pages/municipalities/celebration-menu/celebration-menu.module').then( m => m.CelebrationMenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu-information',
    loadChildren: () => import('./pages/information/menu-information/menu-information.module').then( m => m.MenuInformationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu-new',
    loadChildren: () => import('./pages/notices/menu-new/menu-new.module').then( m => m.MenuNewPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./components/user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
