import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {
  user: FormGroup;
  @Output() checkUser = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[\wа-я]+/)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[\wа-я]+/)])
    });
  }

  start() {
    if (this.user.valid) {
      this.checkUser.emit(this.user.value);
    }
  }


}
