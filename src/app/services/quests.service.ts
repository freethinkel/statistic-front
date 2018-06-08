import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class QuestsService {

  constructor(private api: ApiService) { }


  getAllQuests() {
    return this.api.get('api/quests/all');
  }

  getAllUsers() {
    return this.api.get('api/users');
  }

  createQuest(model) {
    return this.api.post('api/quests/create', model);
  }

  saveQuest(model, id) {
    console.log(model);
    return this.api.post('api/quests/update', model, id);

  }
}
