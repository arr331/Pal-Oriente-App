import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  regionList: any;

  constructor(
    private db: AngularFireDatabase,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
    });
    await loading.present();
    this.db.list(`HOME`).valueChanges().subscribe(ans => {
      this.regionList = ans;
      loading.dismiss();
    });


    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        // alert(result);
        PushNotifications.register();
      } else {
        // Show some error
        alert('error');
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ' + token.value);
      },
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );

  }

  public openProfile(){
    this.router.navigate(['user-profile']);
  }

}
