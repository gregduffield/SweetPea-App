import { Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { catchError, filter, map } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  logIn(email, password) {
    this.authService
      .signIn(email.value, password.value)
      .pipe(
        filter((user) => !!user),
        map((res) => {
          if (this.authService.isEmailVerified) {
            this.router.navigate(['dashboard']);
          } else {
            window.alert('Email is not verififed');
            return false;
          }
        }),
        catchError((error) => of(window.alert(error)))
      )
      .subscribe();
  }
}
