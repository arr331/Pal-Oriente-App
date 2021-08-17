import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { Storage } from '@ionic/storage';
import { Celebration } from 'src/app/interfaces/celebration';
import { Site } from 'src/app/interfaces/site';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage {
  municipality: Municipality;
  information = true;

  constructor(
    public navCtrl: NavController,
    private municipalityService: MunicipalityService,
    private storage: Storage,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.storage.get('ids').then(ids =>
      this.municipalityService.getMunicipality(ids.region, ids.idMun).valueChanges().subscribe(answer => this.municipality = answer)
    );
  }

  async goTo(name: string, route: string, items: Celebration[] | Site[]) {
    await this.storage.set(name, items);
    this.router.navigate([`tabs/${route}`]);
  }
}
