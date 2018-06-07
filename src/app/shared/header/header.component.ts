import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  login;
  isAdmin: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.login = this.authService.logStatus;
    this.router.events.subscribe(() => {
      this.isAdmin = this.router.url === '/admin' && this.authService.logStatus;
    });
  }

  logout() {
    this.authService.logStatus = false;
    this.router.navigate(['/main']);
  }

}
