import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality-menu',
  templateUrl: './municipality-menu.page.html',
  styleUrls: ['./municipality-menu.page.scss'],
})
export class MunicipalityMenuPage implements OnInit {
  municipality: Municipality;

  constructor(public navCtrl: NavController, private munService: MunicipalityService, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('ids').then(ids =>
      this.munService.getMunicipality(ids.region, ids.idMun).valueChanges().subscribe(answer => this.municipality = answer)
    );
  }
}
