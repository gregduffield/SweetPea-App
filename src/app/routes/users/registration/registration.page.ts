import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  signUp(email, password) {
    this.authService
      .registerUser(email.value, password.value)
      .then((res) => {
        this.authService.sendEmailVerification();
        this.router.navigate(['verify-email']);
      })
      .catch((error) => window.alert(error.message));
  }
}
