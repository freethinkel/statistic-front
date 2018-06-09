import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { QuestsService } from '../../services/quests.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.styl']
})
export class QuestComponent implements OnInit {
  isModalOpen = false;
  quests;
  isLoadQuests = true;

  constructor(private usersService: UsersService,
              private questsService: QuestsService) { }

  ngOnInit() {
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getQuests() {
    this.isLoadQuests = true;
    this.questsService.getAllQuests().subscribe(data => {
      this.isLoadQuests = false;
      this.quests = data;
    });
  }

}
