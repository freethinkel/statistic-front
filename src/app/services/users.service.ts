import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UsersService {

  constructor(private storageService: StorageService) { }

  readUser() {

  }

  checkUser(user) {
    const users = this.storageService.get('users');
    if (users) {
      console.log(users);
      for (let i = 0; i < users.length; i++) {
        if ( JSON.stringify(users[i]) === JSON.stringify(user) ) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  saveUser(user) {
    const users = this.storageService.get('users');
    if (users === null || users === '') {
      this.storageService.set({users: [user]});
    } else {
      users.push(user);
      this.storageService.set({users: users});
    }
    console.log(users);
    // this.storageService.set(user);

  }
}
