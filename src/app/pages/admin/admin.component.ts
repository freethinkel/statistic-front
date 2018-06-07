import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { StorageService } from '../../services/storage.service';
import { QuestsService } from '../../services/quests.service';

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
  constructor(private authService: AuthService,
              private router: Router,
              private usersService: UsersService,
              private questsService: QuestsService,
              private storageService: StorageService) { }

  ngOnInit() {
    this.login = this.authService.logStatus;
    this.users = this.storageService.get('users');
    this.getQuests();
  }

  signin(e) {
    this.login = e;
    this.router.navigate(['/admin']);
  }

  getQuests() {
    this.quests = this.questsService.getAll();
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
