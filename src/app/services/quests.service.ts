import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { quests } from '../modules/quests.module';

@Injectable()
export class QuestsService {

  constructor(private storageService: StorageService) { }

  getAll() {
    if (!this.storageService.get('quests')) {
      this.storageService.set({quests: quests});
    }
    return this.storageService.get('quests');
  }

  edit(i, data) {
    const allQuests = this.storageService.get('quests');
    if (i < allQuests.length && i >= 0) {
      allQuests[i] = data;
    }
    this.storageService.set({quests: allQuests });
  }
}
