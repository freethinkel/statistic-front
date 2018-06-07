import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  get(param) {
    return JSON.parse(localStorage.getItem(param));
  }

  set(model) {
    // tslint:disable-next-line:forin
    for (const param in model) {
      localStorage.setItem(param, JSON.stringify(model[param]));
    }
  }

  delete(param) {
    localStorage.removeItem(param);
  }

}
