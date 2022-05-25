import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  form: FormGroup = null;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async signUp(email, password) {
    const loading = await this.loadingController.create();
    const user = await this.authService.registerUser(this.form.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/dashboard', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again');
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
