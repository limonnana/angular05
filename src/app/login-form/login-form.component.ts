import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService} from '../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
   message: string;
   showAlert: boolean;
   wrongPassword: string;

  constructor(private cookieService : CookieService, private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router, private translate: TranslateService) { 
    
  }


    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
        
      }),
      this.showAlert = false;
    }
  
    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login(){
    console.log("login ... ");
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
     
      this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe((response:any) => {
        let responseRestApi = response.response;
       
        if(responseRestApi === "Failed"){
          //this.message = this.wrongPassword;
          this.getWrongPasswordMessage();
          this.showAlert = true;
        }else if(responseRestApi === "Success"){
          const value = {"userId":response.userId,"token":response.token};
          const stringfy = JSON.stringify(value);
          this.cookieService.set('limonnana', stringfy, 1, '/');
          this.router.navigate(['users']);
        }
        
      }), error => {
        console.log(error);
      }
  }
  }

  getWrongPasswordMessage(){
    this.translate.get('wrongPassword').subscribe((text:string) => {
      this.wrongPassword = text;
  })
  }

}