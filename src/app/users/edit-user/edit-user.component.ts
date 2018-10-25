import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../entities/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId$: string;
  theUser: User;
  editForm: FormGroup;
  id: string;


  constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private userService: UserService) { 
    this.route.params.subscribe( params => this.userId$ = params.id );
  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.userService.getUserById(this.userId$)
      .subscribe( data => {
        this.id = data.id;
        this.editForm.setValue({
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        email: data.email
       });
      });
  
    // this.userService.getUserById(this.userId$)
     // .subscribe( data => {
      //  this.theUser = data;
     // });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    // if (this.loginForm.valid) {
      console.log('Form Values: ' + this.f.name.value + ' ' + this.f.lastName.value + ' ' +  this.f.email.value);
      this.userService.updateUser(this.editForm.value)
      .subscribe((response:any) => {console.log(response.response)})
      this.router.navigate(['users']);
}

  changePassword(userId: string){
    this.router.navigate(['changePassword/' + this.userId$]);
  }

}
