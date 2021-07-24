import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-celebration-menu',
  templateUrl: './celebration-menu.page.html',
  styleUrls: ['./celebration-menu.page.scss'],
})
export class CelebrationMenuPage implements OnInit {
  route = 'celebracion';

  constructor(public navCtrl: NavController, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading(): Promise<void> {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
