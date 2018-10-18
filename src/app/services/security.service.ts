import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  authenticated: boolean;
  returnValue: boolean;
  userRol: string;

  constructor(private cookieService: CookieService, private router: Router) { }

  checkSecurity() {
    const cookie = this.cookieService.get('limonnana');

    if (cookie !== '' && cookie !== undefined ) {
      const cookieJson = JSON.parse(cookie);
      const userId = cookieJson.userId;
      const token = cookieJson.token;
      this.authenticated = true;

      if (userId === '' || token === '') {
        this.authenticated = false;
        this.router.navigate(['login']);
      }
    } else {
      this.authenticated = false;
      this.router.navigate(['login']);
    }

  }



}
