import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.page.html',
  styleUrls: ['./site-menu.page.scss'],
})
export class SiteMenuPage implements  ViewWillEnter{
  route = 'sitio';
  change: boolean;

  constructor(public navCtrl: NavController) { }

  ionViewWillEnter() {
    this.change = !this.change;
  }
}
