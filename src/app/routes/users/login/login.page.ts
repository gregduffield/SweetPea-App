import { Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { catchError, filter, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = null;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fb: FormBuilder
  ) {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async logIn() {
    const loading = await this.loadingController.create();
    const user = await this.authService.logIn(this.form.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/dashboard', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
