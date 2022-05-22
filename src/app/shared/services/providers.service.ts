import { Injectable } from '@angular/core';
import {
  CQCProvider,
  GetClosestCQCProvidersRequest,
} from 'src/app/shared/models/provider-models';
import { SweetPeaHttpService } from 'src/app/shared/services/sweet-pea-http.service';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService extends SweetPeaHttpService {
  getClosestCQCProviders = (request: GetClosestCQCProvidersRequest) =>
    this.httpPostAsync<CQCProvider[]>('/CQCProvider', request);
}
