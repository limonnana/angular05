import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarOpen = false;
  isAuthenticated: boolean;
  isAdmin: boolean;


  constructor(private security: SecurityService) {
   // security.checkSecurity();
   this.isAuthenticated = security.isLogged();
   this.isAdmin = security.checkIsAdmin();
   console.log('is authenticated at header like Admin : ' + this.isAdmin);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
   }


}
