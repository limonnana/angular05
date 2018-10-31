import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  isAuthenticated: boolean;
  isAdmin: boolean;

  constructor(private cookieService: CookieService, private router: Router) { 
    //this.router.routeReuseStrategy.shouldReuseRoute = function() {
     // return true;
  //};
  }

  checkSecurity() {
    const cookie = this.cookieService.get('limonnana');

    if (cookie !== '' && cookie !== undefined ) {
      const cookieJson = JSON.parse(cookie);
      const userId = cookieJson.userId;
      const token = cookieJson.token;
      this.isAuthenticated = true;

      if (userId === '' || token === '') {
        this.isAuthenticated = false;
        this.router.navigate(['login']);
      }
    } else {
      this.isAuthenticated = false;
      this.router.navigate(['login']);
    }

  }

  isLogged(): boolean {
    let result = false;
    const cookie = this.cookieService.get('limonnana');
    if (cookie !== '' && cookie !== undefined) {
      const cookieJson = JSON.parse(cookie);
      const userId = cookieJson.userId;
      const token = cookieJson.token;
      if (userId !== '' || token !== '') {
        result = true;
    }
  }
    return result;
  }

  checkAdmin(){
    if(!this.checkIsAdmin()){
      console.log('is admin: ' + this.checkIsAdmin());
     this.cookieService.delete('limonnana');
     this.router.navigate(['login']);
    }
  }

  checkIsAdmin(): boolean {
    let result = false;

    if (this.checkRole() === 'ADMIN') {
      result = true;
    }
     return result;
  }

  checkRole(): string {
    const cookie = this.cookieService.get('limonnana');
    let role = '';
    if (cookie !== '' && cookie !== undefined) {
      const cookieJson = JSON.parse(cookie);
      role = cookieJson.userRole;
      console.log('role from security service ' + role);
      if (role === 'ADMIN') {
        this.isAdmin = true;
        role = 'ADMIN';
      }
    }
  return role;
  }

}
