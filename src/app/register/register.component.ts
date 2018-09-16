import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      retypePassword: ['', Validators.required]
      
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    //if (this.loginForm.valid) {
      console.log("Form Values: " + this.f.name.value + " " + this.f.lastName.value + " " +  this.f.password.value);
      this.registerService.register(this.registerForm.value)
      .subscribe((response:any) => {
        console.log(response.response);
        this.router.navigate(['login']);
      }), error => {
        console.log(error);
      }
}
}

//.subscribe((response:any) => {console.log(response)})
