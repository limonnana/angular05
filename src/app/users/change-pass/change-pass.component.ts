import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserService } from '../../services/user.service';
import { Userlogin} from '../../entities/userlogin'

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  userId$: string;
  passwordForm: FormGroup;
  id:string = '';
  userLogin:Userlogin;
  showAlertPasswordError: boolean;
  messagePasswordError: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,  private userService: UserService) { 
    this.route.params.subscribe( params => this.userId$ = params.id );
  }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required,Validators.minLength(7)]]
     });
     this.showAlertPasswordError = false;
     
  }

  get f() { return this.passwordForm.controls; }


  onSubmit() {
    
      console.log("Form Values: " + this.f.newPassword.value);
      this.userLogin = new Userlogin();
      this.userLogin.id = this.userId$;
      this.userLogin.password = this.f.newPassword.value;
      this.userService.updatePassword(this.userLogin)
      .subscribe((response:any) => {console.log(response.response)})
      this.router.navigate(['users']);

  }
}
