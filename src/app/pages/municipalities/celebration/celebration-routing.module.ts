import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrationPage } from './celebration.page';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  {
    path: '',
    component: CelebrationPage,
    children: [
      {
        path: 'description',
        children: [
          { path: '', component: DescriptionComponent}
        ]
      },
      {
        path: 'activities',
        children: [
          { path: '', component: ActivitiesComponent}
        ]
      },
      {
        path: 'comments',
        children: [
          { path: '', component: CommentsComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrationPageRoutingModule {}
