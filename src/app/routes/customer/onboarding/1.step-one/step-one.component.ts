import { FormControl, FormGroup } from '@angular/forms';
import { FormProvider } from '../form-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
  constructor(private formProvider: FormProvider) {}

  ngOnInit(): void {}
}
