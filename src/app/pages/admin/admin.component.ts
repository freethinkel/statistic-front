import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { QuestsService } from '../../services/quests.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.styl']
})
export class AdminComponent implements OnInit {
  login: boolean;
  isCreateQuest;
  isOpenQuestModal: boolean;

  indexEdit = 0;
  users;
  quests;

  constructor(private router: Router,
              private questsServices: QuestsService) { }

  ngOnInit() {
    if (!!localStorage.getItem('token')) {
      this.login = true;
      this.getQuests();
      this.getUsers();
    }
  }

  signin(e) {
    this.login = !!localStorage.getItem('token');
  }

  getQuests() {
    this.questsServices.getAllQuests().subscribe((data) => {
      console.log(data);
      this.quests = data;
    });
  }

  getUsers() {
    this.questsServices.getAllUsers().subscribe(data => {
      console.log(data);
    });
  }

  openCreateQuest() {
    this.isCreateQuest = true;
    this.isOpenQuestModal = true;
    console.log('create');
  }

  openEditQuest() {
    this.isCreateQuest = false;
    this.isOpenQuestModal = true;
    console.log('edit');
  }

  closeEditModal() {
    this.isCreateQuest = false;
    this.isOpenQuestModal = false;
    this.getQuests();
  }
}
