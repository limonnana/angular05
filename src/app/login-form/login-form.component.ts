import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticationService: AuthenticationService) { }


    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
        
      })
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  login(){
    console.log("login ... ");
  }
  
  onSubmit() {
    //if (this.loginForm.valid) {
      console.log("Form Values: " + this.f.username.value + " " +  this.f.password.value);
       this.autenticationService.login(this.f.username.value , this.f.password.value);
      //}

  }
  

}
