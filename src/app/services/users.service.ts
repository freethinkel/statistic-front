import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  constructor(private api: ApiService) { }

  adminLogin(model) {
    return this.api.post('api/login', model);
  }

  getAdminData() {
    return this.api.get('api/admin');
  }

  getAllUsers() {
    return this.api.get('api/users/list');
  }

  createUser(model) {
    return this.api.post('api/users/create', model);
  }

  deleteUser(id) {
    return this.api.post('api/user/delete', {id});
  }

}
