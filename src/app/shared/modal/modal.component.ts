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
  formValid;
  @Output() checkUser = new EventEmitter();

  constructor(private fb: FormBuilder,
              private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[\wа-я]+/)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[\wа-я]+/)]),
      group: new FormControl('', [Validators.required]),
    });
  }

  start() {
    this.formValid = !this.user.valid;
    if (this.user.valid) {
      localStorage.setItem('user', JSON.stringify(this.user.value));
      this.checkUser.emit();
    }
  }

  onChange() {
    this.formValid = false;
  }

}
