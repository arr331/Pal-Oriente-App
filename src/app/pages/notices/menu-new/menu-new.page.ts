import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../services/notice.service';

@Component({
  selector: 'app-menu-new',
  templateUrl: './menu-new.page.html',
  styleUrls: ['./menu-new.page.scss'],
})
export class MenuNewPage implements OnInit {

  list = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
     this.noticeService.getNotices().then( res =>{
       this.list = res;
       console.log(res);
     });


  }

}
