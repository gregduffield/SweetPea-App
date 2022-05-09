import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormProvider } from '../form-provider';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss'],
})
export class StepSixComponent implements OnInit {
  form: FormGroup;
  options = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('days');
    this.options.forEach((option: any) => {
      this.form.addControl(option, new FormControl(false));
    });
  }
  ngOnInit(): void {}

  returnZero() {
    return 0;
  }
}
