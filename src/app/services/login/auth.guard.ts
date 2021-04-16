import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private navCtrl: NavController,private storage: Storage, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(
        res => {
          this.storage.get('user').then(async resp => {
            if (resp != null) {
              res(true);
            } else {
              this.navCtrl.navigateForward('/login');
              res(false);
            }
          }, err => {
            this.authService.SignOut();
            res(false);
            console.error(err);
          });
        }
      );
  }
  
}
