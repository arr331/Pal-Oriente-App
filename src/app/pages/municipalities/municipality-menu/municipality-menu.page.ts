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
    console.log(this.router.getCurrentNavigation().extras.state);
    //this.idMun = this.activatedroute.snapshot.paramMap.get('idMun');
    this.mpio = this.router.getCurrentNavigation().extras.state;
  }

}
