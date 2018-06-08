import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { quests } from '../../modules/quests.module';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.styl']
})
export class QuestComponent implements OnInit {
  isModalOpen = true;
  quests = quests;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
