import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.page.html',
  styleUrls: ['./celebration.page.scss'],
})
export class CelebrationPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    // objeto celebracio
    console.log(this.router.getCurrentNavigation().extras.state, 'celebration');
  }

}
