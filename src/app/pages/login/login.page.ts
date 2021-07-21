import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { TermsPage } from 'src/app/components/terms/terms.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, public router: Router, public storage: Storage,
    public modalController: ModalController) { }

  ngOnInit() { }

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn(null) as any;
    this.authService.GoogleAuth(googleUser.authentication.idToken)
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: TermsPage,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    const state = await modal.onDidDismiss();
    if (state.data) { this.googleSignup(); }
  }
}
