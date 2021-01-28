import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-master-menu',
  templateUrl: './master-menu.component.html',
  styleUrls: ['./master-menu.component.scss'],
})
export class MasterMenuComponent implements OnInit {
  itemList = [];
  @Input() route: any;
  assx: any;

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    const items = this.router.getCurrentNavigation().extras.state;
    this.itemList = items ? Object.keys(items).map(celeb => items[celeb]) : [];
    this.assx = this.itemList;
  }

}
