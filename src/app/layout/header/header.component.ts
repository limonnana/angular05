import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  isAuthenticated: any;
  

  constructor(private security: SecurityService) { 
   security.checkSecurity();
  }

  ngOnInit() {
    this.isAuthenticated = this.security.authenticated;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
   }


}
