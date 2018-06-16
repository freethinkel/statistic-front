import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  @Output() logEmit = new EventEmitter();
  signin: FormGroup;
  error;
  login;
  errorMessage = 'Введены невалидные данные';

  constructor(private fb: FormBuilder,
              private usersServices: UsersService,
              private router: Router
            ) { }

  ngOnInit() {
    this.initForm();
  }
  submit() {
    if (this.signin.valid) {
      this.usersServices.adminLogin(this.signin.value).subscribe((data) => {
        localStorage.setItem('token', data.token);
        this.logEmit.emit();
      }, () => { this.errorMessage = 'неверный пароль'; this.error = false; });
    } else {
      this.error = true;
    }
  }

  initForm() {
    this.signin = this.fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
