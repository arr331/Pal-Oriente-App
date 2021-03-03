import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Site } from 'src/app/interfaces/site';
import { MunicipalityService } from '../../../services/municipality.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
  item: string = 'description';
  sitio: Site;
  idMun: string;
  comentarios: Comment[];

  constructor(private munService: MunicipalityService, private routeRoute: ActivatedRoute,
    public navCtrl: NavController, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.routeRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.sitio = this.router.getCurrentNavigation().extras.state as Site;
      }
    });
  }
  // objeto de sitio

  /*this.munService.getComentarios(this.sitio.idSite,'-KJSDJKFHDF').then(answer => {
    this.comentarios = answer;
    console.log(this.comentarios);
  });*/

  // this.storage.get('ids').then(ids=>{
  //   this.idMun = ids.idMun;
  // });

  // this.munService.getCom(this.sitio.idSite,'-KJSDJKFHDF').valueChanges().subscribe( res =>{
  //   this.comentarios= res;
  //   console.log(res);
  // });

}
