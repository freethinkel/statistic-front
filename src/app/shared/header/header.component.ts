import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  login;
  isAdmin: boolean;
  constructor(private router: Router,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isAdmin = this.router.url === '/admin' && localStorage.token;
    });
    this.tokenService.state.subscribe(state => {
      this.isAdmin = state;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/main']);
  }

}
