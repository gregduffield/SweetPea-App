import { CQCProvider } from './../../../../shared/models/provider-models';
import { ProvidersService } from './../../../../shared/services/providers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormProvider } from 'src/app/routes/customer/onboarding/form-provider';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  providers$: Observable<CQCProvider[]>;
  loading = true;
  constructor(
    private formProvider: FormProvider,
    private providerService: ProvidersService
  ) {}

  ngOnInit() {
    const data = this.formProvider.getForm().value;

    this.providers$ = this.providerService.getClosestCQCProviders({
      postcode: data.personDetails.postcode,
      miles: 10,
    });
    setTimeout((_) => {
      this.loading = false;
    }, 2000);
  }
}
