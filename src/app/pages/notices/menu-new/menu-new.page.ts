import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/interfaces/notice';
import { NoticeService } from '../../../services/notice.service';

@Component({
  selector: 'app-menu-new',
  templateUrl: './menu-new.page.html',
  styleUrls: ['./menu-new.page.scss'],
})
export class MenuNewPage implements OnInit {
  noticeList: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.noticeService.getNotices().valueChanges().subscribe(res => {
      this.noticeList = res;
      this.noticeList.sort((a, b) => this.compareDates(a.date, b.date)).reverse();
    });
  }

  compareDates(a, b): number{
    return a - b;
  }

}
