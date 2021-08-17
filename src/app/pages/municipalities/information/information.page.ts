import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage {
  municipality: Municipality;
  information = true;

  constructor(public navCtrl: NavController, private municipalityService: MunicipalityService, private storage: Storage) { }

  ionViewWillEnter() {
    this.storage.get('ids').then(ids =>
      this.municipalityService.getMunicipality(ids.region, ids.idMun).valueChanges().subscribe(answer => this.municipality = answer)
    );
  }
}
