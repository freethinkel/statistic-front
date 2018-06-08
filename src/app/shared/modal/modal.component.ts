import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {
  user: FormGroup;
  @Output() checkUser = new EventEmitter();

  constructor(private fb: FormBuilder,
              private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[\wа-я]+/)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[\wа-я]+/)]),
      group: new FormControl('', [Validators.required]),
      countComplitedQuests: new FormControl(0, [Validators.min(0)])
    });
  }

  start() {
    if (this.user.valid) {
      this.usersService.createUser(this.user.value).subscribe(data => {
        console.log(data);
        this.checkUser.emit();
      });
    }
  }


}
