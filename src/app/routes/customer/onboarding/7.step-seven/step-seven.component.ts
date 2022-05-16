import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormProvider } from '../form-provider';


@Component({
  selector: 'app-step-seven',
  templateUrl: './step-seven.component.html',
  styleUrls: ['./step-seven.component.scss'],
})
export class StepSevenComponent implements OnInit {
  form: FormGroup;
  options = ['Immediately', 'Calendar'];
  constructor(private formProvider: FormProvider) {
    this.form = formProvider.getForm().get('startDate') as FormGroup;
    this.options.forEach((option: any) => {
      this.form.addControl(option, new FormControl(false));
    });
  }

  ngOnInit(): void {}

  returnZero() {
    return 0;
  }
}
