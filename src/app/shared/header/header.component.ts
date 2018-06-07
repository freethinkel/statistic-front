import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  login;
  isAdmin: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isAdmin = this.router.url === '/admin' && localStorage.token;

    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/main']);
  }

}
