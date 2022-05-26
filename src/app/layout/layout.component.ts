import { Observable } from 'rxjs';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonToggle, MenuController } from '@ionic/angular';
import { UserProfile } from 'src/app/shared/models/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  userProfile$!: Observable<UserProfile>;
  private isDarkMode = false;
  constructor(
    private menu: MenuController,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.userProfile$ = this.authService.currentUserProfile$;
  }

  openMenu() {
    this.menu.enable(true, 'profile');
    this.menu.open('profile');
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
