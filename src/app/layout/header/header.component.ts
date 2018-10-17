import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  navbarOpen = false;

  constructor(private security: SecurityService) { }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
   }


}
