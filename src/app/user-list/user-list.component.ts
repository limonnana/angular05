import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entities/user';
import { SecurityService} from '../services/security.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,private security: SecurityService) {
    this.security.checkSecurity();
   }

  ngOnInit() {
    
    this.userService.getAllUsers()
      .subscribe( data => {
        this.users = data;
      });
    }

}
