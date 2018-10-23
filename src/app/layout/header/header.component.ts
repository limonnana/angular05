import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarOpen = false;
  isAuthenticated: boolean;
  isAdmin: boolean;


  constructor(private security: SecurityService,  private cookieService: CookieService, private router: Router) {
   this.isAuthenticated = security.isLogged();
   this.isAdmin = security.checkIsAdmin();
   console.log(' is authenticated at header: ' + this.isAuthenticated);
   console.log('is authenticated at header like Admin : ' + this.isAdmin);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
   }

   logout(){
    this.cookieService.delete('limonnana');
    this.router.navigate(['login']);
   }

}
