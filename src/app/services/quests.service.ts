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
    console.log(id);
    return this.api.post('api/quest/delete', {id});
  }

  saveQuest(model, id) {
    console.log(model);
    let data = {
      id: id,
      model: model
    };
    return this.api.put('api/quest', data);

  }
}
