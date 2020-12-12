import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { DescriptionComponent } from './components/description/description.component';
import { LocatedComponent } from './components/located/located.component';

import { SitePage } from './site.page';

const routes: Routes = [
  {
    path: '',
    component: SitePage,
    children: [
      {
        path: 'description',
        children: [
          { path: '', component: DescriptionComponent}
        ]
      },
      {
        path: 'map',
        children: [
          { path: '', component: LocatedComponent}
        ]
      },
      {
        path: 'comments',
        children: [
          { path: '', component: CommentsComponent}
        ]
      },
    ]
  },
 /* {
    path: '',
    redirectTo: '/site/description',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitePageRoutingModule {}
