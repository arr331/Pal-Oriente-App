import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Celebration } from 'src/app/interfaces/celebration';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.page.html',
  styleUrls: ['./celebration.page.scss'],
})
export class CelebrationPage implements OnInit {
  item = 'description';
  celebration: Celebration;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get('celebration').then(celebration =>
      this.celebration = celebration
    );
  }
}
