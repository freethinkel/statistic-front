import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class QuestsService {

  constructor(private api: ApiService) { }


  getAllQuests() {
    return this.api.get('api/quests/all');
  }

  createQuest(model) {
    return this.api.post('api/quest', model);
  }

  removeQuest(id) {
    return this.api.post('api/delete/quest', {id});
  }

  saveQuest(model, id) {
    let data = {
      id: id,
      model: model
    };
    return this.api.put('api/quest', data);

  }
}
