import { Component, OnInit, ViewChild } from '@angular/core';
import { IonToggle, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  private isDarkMode = false;
  constructor(private menu: MenuController) {}

  ngOnInit() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
