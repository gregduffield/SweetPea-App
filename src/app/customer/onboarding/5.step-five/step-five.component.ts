import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormProvider } from '../form-provider';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss'],
})
export class StepFiveComponent implements OnInit {
  form: FormGroup;
  options = [
    'Morning',
    'Lunchtime',
    'Afternoon',
    'Evening',
    'Through the night',
  ];
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('times');
    this.options.forEach((option: any) => {
      this.form.addControl(option, new FormControl(false));
    });
  }
  ngOnInit(): void {}
}
