import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.page.html',
  styleUrls: ['./site-menu.page.scss'],
})
export class SiteMenuPage implements OnInit {
  route = 'sitio';

  constructor(public navCtrl: NavController, private loadingController: LoadingController) { }

  ngOnInit() { 
    this.presentLoading();
  }

  async presentLoading() {
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
