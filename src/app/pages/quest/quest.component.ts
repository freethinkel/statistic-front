import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { quests } from '../../modules/quests.module';
import { QuestsService } from '../../services/quests.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.styl']
})
export class QuestComponent implements OnInit {
  isModalOpen = true;
  quests = quests;

  constructor(private usersService: UsersService,
              private questsService: QuestsService) { }

  ngOnInit() {
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getQuests() {
    this.questsService.getAllQuests().subscribe(data => {
      this.quests = data;
    });
  }

}
