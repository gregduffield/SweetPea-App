import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormProvider } from '../form-provider';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss'],
})
export class StepFourComponent implements OnInit {
  form: FormGroup;
  options = [
    'Living with dementia',
    'Wheelchair user',
    'Deaf or hard of hearing',
    'Other',
  ];
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('additionalNeeds');
    this.options.forEach((option: any) => {
      this.form.addControl(option, new FormControl(false));
    });
  }

  ngOnInit(): void {}
}
