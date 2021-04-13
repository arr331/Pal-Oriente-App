import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { User } from 'src/app/interfaces/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public storage: Storage
  ) {}

  ngOnInit() {}

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn(null) as any;
    console.log('my user: ', googleUser);

    if (googleUser) {
      const userData: User = {
        uid: googleUser.id,
        email: googleUser.email,
        displayName: googleUser.name,
        photoURL: googleUser.imageUrl,
        emailVerified: true
      }
      await this.storage.set('user', userData);
      this.router.navigate(['']);
      this.authService.SetUserData(userData);
    } else {
      await this.storage.set('user', null);
    }
  }

}
