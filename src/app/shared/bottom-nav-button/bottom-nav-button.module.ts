import { RouterModule } from '@angular/router';
import { BottomNavButtonComponent } from './bottom-nav-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BottomNavButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BottomNavButtonComponent]
})
export class BottomNavButtonModule { }
