import { Component } from '@angular/core';
import { NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-celebration-menu',
  templateUrl: './celebration-menu.page.html',
  styleUrls: ['./celebration-menu.page.scss'],
})
export class CelebrationMenuPage implements ViewWillEnter {
  route = 'celebracion';
  change: boolean;

  constructor(public navCtrl: NavController) { }

  ionViewWillEnter() {
    this.change = !this.change;
  }
}
