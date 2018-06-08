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

  getAllQuests() {
    return this.api.get('api/quests/all');
  }
}
