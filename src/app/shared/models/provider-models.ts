export interface GetClosestCQCProvidersRequest {
  postcode: string;
  miles: number;
}

export interface CQCProvider {
  cqcLocation: string;
  name: string;
  postcode: string;
  phoneNUmber: string;
  websiteUrl: string;
  serviceTypes: string;
  services: string;
  providerName: string;
  localAuhtority: string;
  region: string;
  locationUrl: string;
}
