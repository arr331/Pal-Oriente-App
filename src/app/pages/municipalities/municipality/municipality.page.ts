import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit {
  municipalityList: any = [];

  constructor(private munService: MunicipalityService, private activatedroute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.munService.getMunicipios(this.activatedroute.snapshot.paramMap.get('region')).then(answer => this.municipalityList = answer);
  }
}
