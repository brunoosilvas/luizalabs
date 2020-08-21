import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class CepsService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.API}/ceps/`;
  }

  all(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}`).toPromise()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  find(cep: string): Promise<any> {
    cep = cep.replace(/[^a-z0-9]/gi, '');
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}${cep}`).toPromise()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
