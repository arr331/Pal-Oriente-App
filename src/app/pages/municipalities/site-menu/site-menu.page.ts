import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.page.html',
  styleUrls: ['./site-menu.page.scss'],
})
export class SiteMenuPage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) { }

  sites;
  ngOnInit() {
    // lista de sitios
    this.sites = this.router.getCurrentNavigation().extras.state;
  }

}
