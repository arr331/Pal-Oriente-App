import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.page.html',
  styleUrls: ['./celebration.page.scss'],
})
export class CelebrationPage implements OnInit {

  celebration: any;
  item = 'description'

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    // objeto celebracio
    this.celebration = this.router.getCurrentNavigation().extras.state;
    console.log(this.router.getCurrentNavigation().extras.state);
  }

}
