import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality-menu',
  templateUrl: './municipality-menu.page.html',
  styleUrls: ['./municipality-menu.page.scss'],
})
export class MunicipalityMenuPage implements OnInit {
  idMun;

  constructor(public activatedroute: ActivatedRoute, public navCtrl: NavController, private munService: MunicipalityService) { }

  ngOnInit() {
    this.idMun = this.activatedroute.snapshot.paramMap.get('idMun');
  }

}
