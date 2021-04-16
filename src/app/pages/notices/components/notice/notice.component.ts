import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notice } from 'src/app/interfaces/notice';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {

  notice: Notice;
  list =  [];

  constructor(public navCtrl: NavController,private router: Router) { }

  ngOnInit() {
    this.notice= this.router.getCurrentNavigation().extras.state as Notice;
  }

}
