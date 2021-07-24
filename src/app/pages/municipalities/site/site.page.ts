import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  ) {}

  ngOnInit() {
    this.routeRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.sitio = this.router.getCurrentNavigation().extras.state as Site;
      }
    });
  }
}
