import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM, NotificationData } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private fcm: FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.fcm.getToken().then(token => {
      //   //backend.registerToken(token);
      //   console.log('Este es el token para el dispositivo' + token);
      // }).catch(error =>{
      //   console.log(error);
      // });

      // this.fcm.onNotification().subscribe(data => {
      //   if(data.wasTapped){
      //     console.log("Received in background");
      //   } else {
      //     console.log("Received in foreground");
      //   };
      // });
      
      // this.fcm.onTokenRefresh().subscribe(token => {
      //   //backend.registerToken(token);
      //   console.log("actualizacion tockend"+ token);
      // });
      
      // this.fcm.hasPermission().then(hasPermission => {
      //   if (hasPermission) {
      //     console.log("Has permission!");
      //   }
      // })
      
      // this.fcm.clearAllNotifications();
      
      // this.fcm.unsubscribeFromTopic('marketing');
      
    });
  }
}
