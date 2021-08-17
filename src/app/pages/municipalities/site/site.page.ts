import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Site } from 'src/app/interfaces/site';

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
  item = 'description';
  site: Site;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get('site').then(site =>
      this.site = site
    );
  }
}
