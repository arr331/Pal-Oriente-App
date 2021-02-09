import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNewPage } from './menu-new.page';
import { NoticeComponent } from '../components/notice/notice.component';

const routes: Routes = [
  {
    path: '',
    component: MenuNewPage
  },

  {
    path: 'tabs/news/notice',
    component: NoticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNewPageRoutingModule {}
