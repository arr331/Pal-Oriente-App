import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit {
  municipalityList: Array<Municipality> = [];
  region: string;

  constructor(private munService: MunicipalityService, private activatedroute: ActivatedRoute,
              public navCtrl: NavController, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.region = this.activatedroute.snapshot.paramMap.get('region');
    this.munService.getMunicipalitiesInfo(this.region).then(answer => this.municipalityList = answer);
  }

  async goTo(mun) {
    await this.storage.set('ids', {'region': this.region, 'idMun': mun.idMun});
    this.router.navigate(['tabs/municipio/menu']);
  }
}
