import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-municipality-menu',
  templateUrl: './municipality-menu.page.html',
  styleUrls: ['./municipality-menu.page.scss'],
})
export class MunicipalityMenuPage implements OnInit {
  mpio;

  constructor(private router: Router, public activatedroute: ActivatedRoute, public navCtrl: NavController, private munService: MunicipalityService) { }

  ngOnInit() {
    const path = this.router.getCurrentNavigation().extras.state.path;
    this.munService.getMunicipality(path).valueChanges().subscribe(answer => this.mpio = answer);
  }

}
