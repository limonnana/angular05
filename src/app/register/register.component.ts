import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      retypePassword: ['', Validators.required]
      
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    //if (this.loginForm.valid) {
      console.log("Form Values: " + this.f.name.value + " " + this.f.lastName.value + " " +  this.f.password.value);
      this.registerService.register(this.registerForm.value)
      .subscribe((response:any) => {console.log(response.response)})
     // .pipe(first())
      //      .subscribe(
      //          data => {
       //           console.log("Success ..");
       //         },
        //        error => {
        //            console.log("Error ..");
        //        });
    
      //}

  }

}

//.subscribe((response:any) => {console.log(response)})
