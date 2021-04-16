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
    this.authService.GoogleAuth(googleUser.accessToken)
    alert(JSON.stringify(googleUser));
    alert("id"+ googleUser.id);
  }

}
