import { withCache } from '@ngneat/cashew';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class SweetPeaHttpService {
  constructor(private http: HttpClient) {}
  get api() {
    return environment.apiHost;
  }

  httpPost(url: string, body: any) {
    return this.http.post(this.api + url, body);
  }

  httpPut(url: string, body: any) {
    return this.http.put(this.api + url, body);
  }

  httpPutAsync<T>(url: string, body: any) {
    return this.http.put<T>(this.api + url, body);
  }

  httpPatch(url: string, body: any) {
    return this.http.patch(this.api + url, body);
  }

  httpPatchAsync<T>(url: string, body: any) {
    return this.http.patch<T>(this.api + url, body);
  }

  httpPostAsync<T>(url: string, body: any) {
    return this.http.post<T>(this.api + url, body);
  }

  httpDelete(url: string) {
    return this.http.delete(this.api + url);
  }

  httpDeleteAsync<T>(url: string) {
    return this.http.delete<T>(this.api + url);
  }

  httpGet<T>(
    url: string,
    params?: SweetPeaHttpParams,
    cache: boolean = false
  ): Observable<T> {
    const httpOptions = {
      params: this.buildParams(params),
      context: cache ? withCache() : null,
      headers: {
        //'Accept-Encoding': `br`, //server does this on its own
      },
    };

    return this.http.get<T>(this.api + url, httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private buildParams(params: SweetPeaHttpParams): HttpParams {
    return Object.keys(params || {}).reduce((p, key) => {
      if (params[key]) {
        return p.set(key, params[key].toString());
      }
      return p;
    }, new HttpParams());
  }
}

export interface SweetPeaHttpParams {
  [param: string]: string | number;
}
