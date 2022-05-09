import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormProvider } from '../form-provider';

@Component({
  selector: 'app-step-eight',
  templateUrl: './step-eight.component.html',
  styleUrls: ['./step-eight.component.scss'],
})
export class StepEightComponent implements OnInit {
  form: FormGroup;
  options = [
    'Keeping the house clean and tidy',
    'Help with shopping and running errands',
    'Personal care e.g. hair + foot care',
    'Gardening',
  ];
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('otherActivities');
    this.options.forEach((option: any) => {
      this.form.addControl(option, new FormControl(false));
    });
  }
  ngOnInit(): void {}
}
