import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.styl']
})
export class AdminComponent implements OnInit {
  login: boolean;
  isOpenEditQuest: boolean;
  indexEdit = 0;
  users;
  quests;
  constructor(private router: Router,
              private usersService: UsersService,) { }

  ngOnInit() {
    if (!!localStorage.getItem('token')) {
      this.login = true;
      this.usersService.getAllQuests().subscribe((data) => {
        console.log(data);
        this.quests = data;
      });
    }
  }

  signin(e) {
    this.login = !!localStorage.getItem('token');
  }

  getQuests() {
    console.log(this.quests);
  }
  editQuest(i) {
    console.log(i);
    this.indexEdit = i;
    console.log(this.quests[this.indexEdit]);
    this.isOpenEditQuest = true;
    // this.questsService.edit(i, data);
  }

  closeEditModal() {
    this.isOpenEditQuest = false;
    this.getQuests();
  }
}
