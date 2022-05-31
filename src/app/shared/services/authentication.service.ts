import { User, UserProfile } from './../models/user';
import { Injectable, NgZone, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { docData, collection, doc, Firestore } from '@angular/fire/firestore';
import {
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { emailVerified } from '@angular/fire/auth-guard';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUserProfile = new BehaviorSubject<UserProfile>(null);
  currentUserProfile$ = this.currentUserProfile.asObservable();

  constructor(
    private firestore: Firestore,
    private auth: Auth,
    public router: Router,
    public ngZone: NgZone
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // get the user profile
        this.setUserProfile(user);
      } else {
        //clear the user profile
        this.currentUserProfile.next(null);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }

  async logIn({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);

      return user;
    } catch (e) {
      return null;
    }
  }

  async registerUser({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  async passwordRecover(passwordResetEmail: string) {
    await sendPasswordResetEmail(this.auth, passwordResetEmail);
    window.alert('Password reset email has been sent, please check your inbox');
  }

  async setUserProfile(user) {
    const userRef = doc(this.firestore, `userprofiles/${user.uid}`);
    const userData = docData(userRef, {
      idField: 'id',
    }) as Observable<UserProfile>;
    userData
      .pipe(filter((profile) => !!profile))
      .subscribe((profile) => this.currentUserProfile.next(profile));
  }

  logOut() {
    signOut(this.auth);
  }
}
