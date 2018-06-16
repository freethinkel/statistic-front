import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers, Http, URLSearchParams, QueryEncoder } from '@angular/http';
import { map } from 'rxjs/operators/map';
import { TokenService } from './token.service';

@Injectable()
export class ApiService {

  constructor(private http: Http, @Inject('API_ROOT_URL') private apiRootUrl: string, private tokenService: TokenService) { }

  get(url, paramsObj?) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    if (this.tokenService.token) {
      headers.append('Authorization', this.tokenService.token);
    }
    let params: URLSearchParams = new URLSearchParams('');
    if (paramsObj) {
      for (let param in paramsObj) {
        params.set(param, paramsObj[param]);
      }
    }
    return  this.http.get(`${this.apiRootUrl}${url}`, { headers: headers, params: params }).pipe(map(response => response.json()));
  }

  post(url, body, paramsObj?, headersObj?) {
    let headers = new Headers();
    if (headersObj) {
      for (let header in headersObj) {
        headers.append(header, headersObj[header]);
      }
    } else {
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    }
    if (this.tokenService.token) {
      let tokenHeader = this.tokenService.token;
      headers.append('Authorization', tokenHeader);
    }
    let params: URLSearchParams = new URLSearchParams('');
    if (paramsObj) {
      for (let param in paramsObj) {
        params.set(param, paramsObj[param]);
      }
    }
    return  this.http.post(`${this.apiRootUrl}${url}`, body, { headers: headers, params: params }).pipe(map(response => response.json()));
  }

  put(url, body, paramsObj?, headersObj?) {
    let headers = new Headers();
    if (headersObj) {
      for (let header in headersObj) {
        headers.append(header, headersObj[header]);
      }
    } else {
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    }
    if (this.tokenService.token) {
      let tokenHeader = this.tokenService.token;
      headers.append('Authorization', tokenHeader);
    }
    let params: URLSearchParams = new URLSearchParams('');
    if (paramsObj) {
      for (let param in paramsObj) {
        params.set(param, paramsObj[param]);
      }
    }
    return  this.http.put(`${this.apiRootUrl}${url}`, body, { headers: headers, params: params }).pipe(map(response => response.json()));
  }

  delete(url, paramsObj?) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    if (this.tokenService.token) {
      headers.append('Authorization', this.tokenService.token);
    }
    let params: URLSearchParams = new URLSearchParams('');
    if (paramsObj) {
      for (let param in paramsObj) {
        params.set(param, paramsObj[param]);
      }
    }
    return this.http.delete(`${this.apiRootUrl}${url}`, { headers: headers, params: params }).pipe(map(response => response.json()))
  }

}
