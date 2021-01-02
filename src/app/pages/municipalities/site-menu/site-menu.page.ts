import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.page.html',
  styleUrls: ['./site-menu.page.scss'],
})
export class SiteMenuPage implements OnInit {
  route = 'sitio';

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

}
