import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  sitio: Site;
  idMun: string;
  comentarios: Comment[];

  constructor(
    private routeRoute: ActivatedRoute,
    public navCtrl: NavController,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get('site').then(site =>
      this.sitio = site
    );
    this.routeRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.sitio = this.router.getCurrentNavigation().extras.state as Site;
      }
    });
  }
}
