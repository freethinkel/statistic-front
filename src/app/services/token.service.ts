import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TokenService {

  public state: Subject<boolean> = new Subject();

  constructor() { }

  get token() {
    return localStorage.getItem('token');
  }

  set token(token) {
    localStorage.setItem('token', token);
  }

  
  

}
