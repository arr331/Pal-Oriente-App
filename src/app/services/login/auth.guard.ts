import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((res) => {
      this.storage.get('user').then(
        async (resp) => {
          if (resp != null) {
            res(true);
          } else {
            this.navCtrl.navigateForward('/login');
            res(false);
          }
        }, (err) => {
          this.authService.SignOut();
          res(false);
          console.error(err);
        }
      );
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((res) => {
      this.storage.get('user').then(
        (resp) => {
          if (resp == null) {
            res(true);
          } else {
            this.navCtrl.navigateForward('/tabs/home');
            res(false);
          }
        }, (err) => {
          // mensaje de error para volver a loguear
          this.authService.SignOut();
          res(true);
          console.error(err);
        }
      );
    });
  }
}
