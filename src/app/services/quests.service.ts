import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class QuestsService {

  constructor(private api: ApiService) { }


  getAllQuests() {
    return this.api.get('api/quests/all');
  }

  createQuest(model) {
    return this.api.post('api/quests/create', model);
  }

  saveQuest(model, id) {
    console.log(model);
    let data = {
      id: id,
      model: model
    };
    return this.api.post('api/quests/update', data);

  }
}
