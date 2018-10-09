import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private cookieService : CookieService, private router: Router) { }

  checkSecurity(){
    const cookie = this.cookieService.get('limonnana');
   
    if(cookie !== "" && cookie !== undefined ){
      let cookieJson = JSON.parse(cookie);
      
      let userId = cookieJson.userId;
      let token = cookieJson.token;
      if(userId === "" || token === ""){
        this.router.navigate(['login']);
      }
    }else{
      this.router.navigate(['login']);
    }

  }

}
