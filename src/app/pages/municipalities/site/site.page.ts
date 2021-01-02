import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    // objeto de sitio
    console.log(this.router.getCurrentNavigation().extras.state);
  }

}
