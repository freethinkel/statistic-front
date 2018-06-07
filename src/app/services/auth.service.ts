import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(model) {
    const user = this.storageService.get('admin');
    return model.password === user.password && model.login === user.login;
  }

  initUser() {
    if (this.storageService.get('admin') === null) {
      const users = {
        admin: {
          login: 'admin',
          password: 'admin'
        }
      };
      this.storageService.set(users);
    }
  }

  set logStatus(status) {
    this.storageService.set({login_status: status});
  }

  get logStatus() {
    return JSON.parse(this.storageService.get('login_status'));
  }


}
