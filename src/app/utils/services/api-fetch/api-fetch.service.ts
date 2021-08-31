import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  constructor(private _http: HttpClient) { }

  requestAsync(
    method: string,
    path: string
  ) {
    return new Promise((resolve, reject) => {
      let config: object = {};

      this._http
        .request<any>(method, `${environment.apiUrl}${path}`, config)
        .subscribe(
          (res) => resolve(res),
          (error) =>
            reject({
              status: error.status,
              message:
                error.error != undefined
                  ? error.error.message
                  : error.message,
            })
        );
    });
  }
}