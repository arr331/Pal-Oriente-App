import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MunicipalityService } from '../../../services/municipality.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {

  item: string = 'description';
  sitio: any;
  comentarios: any[];

  constructor(private munService: MunicipalityService, private activatedroute: ActivatedRoute,public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    // objeto de sitio
    this.sitio= this.router.getCurrentNavigation().extras.state;
    console.log(this.sitio);
    this.munService.getComentarios(this.sitio.idSite,'-KJSDJKFHDF').then(answer => {
      this.comentarios = answer;
      console.log(this.comentarios);
    });
    console.log(this.router.getCurrentNavigation().extras.state);
  }

}
