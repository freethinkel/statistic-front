import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.styl']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Output() delete = new EventEmitter();
  isOpenDesc;
  rusMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  toggleOpen() {
    this.isOpenDesc = !this.isOpenDesc;
  }

  closeDesc() {
    if (this.isOpenDesc) this.isOpenDesc = false;
  }

  deleteUser() {
    this.usersService.deleteUser(this.user._id).subscribe(data => {
    this.delete.emit();
    });
  }

}
