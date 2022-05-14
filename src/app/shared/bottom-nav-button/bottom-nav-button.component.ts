import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bottom-nav-button',
  templateUrl: './bottom-nav-button.component.html',
  styleUrls: ['./bottom-nav-button.component.scss'],
})
export class BottomNavButtonComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() routerLink: string;
  constructor() { }
   
  ngOnInit() {}

}
