import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Municipality } from 'src/app/interfaces/municipality';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  municipality: Municipality;

  constructor(public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.municipality = this.router.getCurrentNavigation().extras.state as Municipality;
  }

}
