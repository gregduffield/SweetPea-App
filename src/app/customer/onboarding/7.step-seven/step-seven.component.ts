import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormProvider } from '../form-provider';
import { tap } from 'rxjs/operators';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-step-seven',
  templateUrl: './step-seven.component.html',
  styleUrls: ['./step-seven.component.scss'],
})
export class StepSevenComponent implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;
  form: FormGroup;
  dateTimeForm: FormGroup;
  
  constructor(private formProvider: FormProvider, private fb: FormBuilder) {
    this.form = formProvider.getForm().get('startDate') as FormGroup;
    this.dateTimeForm = fb.group({
      date: [null, Validators.required],
      
      immediately: [null]
    });
    
  }

  ngOnInit(): void {

    this.dateTimeForm.get('immediately').valueChanges.pipe(tap(data => {
      if(!!data){
      this.dateTimeForm.patchValue({date: new Date(), time: new Date()});
      }
      else {
        this.dateTimeForm.patchValue({date: null, time: null});
      }
    })).subscribe();
  }

  returnZero() {
    return 0;
  }
}

