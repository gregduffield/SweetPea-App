import { FormProvider } from '../form-provider';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  form!: FormGroup;

  self!: FormControl;
  other!: FormControl;
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('who');
    this.self = <FormControl>this.form.get('self');
    this.other = <FormControl>this.form.get('other');

    this.self.valueChanges.pipe().subscribe((val) => {
      if (val) {
        this.other.patchValue(false);
      }
    });
    this.other.valueChanges.pipe().subscribe((val) => {
      if (val) {
        this.self.patchValue(false);
      }
    });
  }

  ngOnInit(): void {}
}
