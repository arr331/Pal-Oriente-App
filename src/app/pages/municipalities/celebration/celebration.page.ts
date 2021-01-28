import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Celebration } from 'src/app/interfaces/celebration';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.page.html',
  styleUrls: ['./celebration.page.scss'],
})
export class CelebrationPage implements OnInit {
  celebration: Celebration;
  item = 'description'

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.celebration = this.router.getCurrentNavigation().extras.state as Celebration;
  }

}
