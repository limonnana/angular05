import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService} from '../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
   message: string;
   showAlert: boolean;

  constructor(private cookieService : CookieService, private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { 

  }


    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
        
      }),
      this.message = " User or password are wrong  ";
      this.showAlert = false;
    }
  
    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login(){
    console.log("login ... ");
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Form Values: " + this.f.username.value + " " +  this.f.password.value);
      this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe((response:any) => {
        let responseRestApi = response.response;
        console.log(responseRestApi);
        if(responseRestApi === "Failed"){
          this.showAlert = true;
        }else if(responseRestApi === "Success"){
          const value = {"userId":response.userId,"token":response.token};
          const stringfy = JSON.stringify(value);
          this.cookieService.set('limonnana', stringfy, 1, '/');
          console.log("Cookie value: " + this.cookieService.get('limonnana'));
          this.router.navigate(['users']);
        }
        
      }), error => {
        console.log(error);
      }
  }
  }


}