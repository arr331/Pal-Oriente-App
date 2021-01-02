import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-celebration-menu',
  templateUrl: './celebration-menu.page.html',
  styleUrls: ['./celebration-menu.page.scss'],
})
export class CelebrationMenuPage implements OnInit {
  route = 'celebracion';

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

}
