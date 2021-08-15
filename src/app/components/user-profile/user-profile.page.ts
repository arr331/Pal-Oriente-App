import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public userData: User;
  darkMode = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController,
    private storage: Storage,
    public navCtrl: NavController
  ) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  async ngOnInit(): Promise<void> {
    this.userData = await this.storage.get('user');
  }

  public logOut(){
    this.authService.SignOut();
    this.router.navigate(['login']);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea cerrar su sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirmar',
          handler: () => {
            this.logOut();
          }
        }
      ]
    });

    await alert.present();
  }

  change() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

}
