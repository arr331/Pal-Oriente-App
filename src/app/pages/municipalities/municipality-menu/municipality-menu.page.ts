import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality-menu',
  templateUrl: './municipality-menu.page.html',
  styleUrls: ['./municipality-menu.page.scss'],
})
export class MunicipalityMenuPage implements OnInit {
  municipality;

  constructor(public activatedroute: ActivatedRoute, public navCtrl: NavController,
    private munService: MunicipalityService, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('path').then(path =>
      this.munService.getMunicipality(path).valueChanges().subscribe(answer => this.municipality = answer)
    );
  }

}
