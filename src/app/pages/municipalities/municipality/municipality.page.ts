import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit {
  municipalityList: any = [];
  region: string;

  constructor(private munService: MunicipalityService, private activatedroute: ActivatedRoute,
    public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.region = this.activatedroute.snapshot.paramMap.get('region');
    this.munService.getMunicipalitiesInfo(this.region).then(answer => this.municipalityList = answer);
  }

  goTo(mun) {
    this.router.navigate(["tabs/municipio/menu"], { state: { path: `${this.region}/MUNICIPALITIES/${mun.idMun}` } });
  }
}
