import { Component } from '@angular/core';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Site } from 'src/app/interfaces/site';

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements ViewWillEnter {
  item = 'description';
  site: Site;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    this.storage.get('site').then(site =>
      this.site = site
    );
  }
}
