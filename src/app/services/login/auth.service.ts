import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/interfaces/user';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone, 
    private storage: Storage 
  ) {
    this.ngFireAuth.authState.subscribe(async user => {
      if (user) {
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified
        }
        console.log(userData);
        this.userData = userData;
        await this.storage.set('user', this.userData);
      } else {
        await this.storage.set('user', null);
      }
    })
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email']);
    })
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in
  async isLoggedIn(): Promise<boolean> {
    const user = await this.storage.get('user');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  async isEmailVerified(): Promise<boolean> {
    const user = await this.storage.get('user');
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in with Gmail
  GoogleAuth(token) {
    return this.AuthLogin(auth.GoogleAuthProvider.credential(token, null));
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.auth.signInWithCredential(provider)
    .then(async (result) => {
      const user: User = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        emailVerified: result.user.emailVerified
      }
      this.userData = user;
      await this.storage.set('user', this.userData);
       this.ngZone.run(() => {
          this.router.navigate(['']);
        })
      this.SetUserData(this.userData);
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    return userRef.set(user, {
      merge: true
    })
  }

  // Sign-out 
  SignOut() {
    return this.ngFireAuth.auth.signOut().then(async () => {
      await this.storage.remove('user');
      this.router.navigate(['login']);
    })
  }
}
