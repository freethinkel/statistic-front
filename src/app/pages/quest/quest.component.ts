import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { QuestsService } from '../../services/quests.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.styl']
})
export class QuestComponent implements OnInit {
  isModalOpen = true;
  isModalDoneOpen = false;
  doneData;
  quests;
  isLoadQuests = true;
  solutions;

  constructor(private usersService: UsersService,
              private questsService: QuestsService) { }

  ngOnInit() {
    this.getQuests();
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getQuests() {
    this.isLoadQuests = true;
    this.questsService.getAllQuests().subscribe(data => {
      this.isLoadQuests = false;
      this.quests = data;
      if (this.quests) {
        this.solutions = new Array(this.quests.length);
      }
    });
  }

  setSolution(e, i) {
    this.solutions[i] = e;
  }

  submitTest() {
    let user = JSON.parse(localStorage.getItem('user'));
    user['solutions'] = this.solutions;
    this.usersService.createUser(user).subscribe(data => {
      this.doneData = data;
      this.isModalDoneOpen = true;
    });
  }

}
