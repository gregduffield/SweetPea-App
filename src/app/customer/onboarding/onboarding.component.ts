
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormProvider } from './form-provider';

@Component({
  selector: 'app-onboarding',
  template: '<ion-router-outlet></ion-router-outlet>',

  providers: [{ provide: FormProvider, useExisting: OnboardingComponent }],
})
export class OnboardingComponent extends FormProvider implements OnInit {
  onboardingForm = new FormGroup({
    who: new FormGroup({
      self: new FormControl('', Validators.required),
      other: new FormControl('', Validators.required),
    }),
    typeOfCare: new FormGroup({}),
    additionalNeeds: new FormGroup({}),
    times: new FormGroup({}),
    days: new FormGroup({}),
    startDate: new FormGroup({}),
    otherActivities: new FormGroup({}),
    personDetails: new FormGroup({}),
  });
  constructor() {
    super();
  }

  getForm(): FormGroup {
    return this.onboardingForm;
  }

  ngOnInit(): void {}
}
