import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


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
              private authService: AuthService,
              private router: Router
            ) { }

  ngOnInit() {
    this.initForm();
  }
  submit() {
    if (this.signin.valid) {
      this.error = !this.authService.login(this.signin.value);
      if (this.authService.login(this.signin.value)) {
        this.authService.logStatus = true;
        this.login = true;
        this.logEmit.emit(true);
      } else {
        console.log('Error');
      }
    }
  }

  initForm() {
    this.signin = this.fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
