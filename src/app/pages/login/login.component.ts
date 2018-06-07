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

  constructor(private fb: FormBuilder,
              private usersServices: UsersService,
              private router: Router
            ) { }

  ngOnInit() {
    this.initForm();
  }
  submit() {
    this.usersServices.adminLogin(this.signin.value).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      this.logEmit.emit();
    });
  }

  initForm() {
    this.signin = this.fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
