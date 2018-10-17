import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { SecurityService } from '../../services/security.service';
import { User } from '../../entities/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private security: SecurityService, private userService: UserService, private router: Router) { 
    security.checkSecurity();
    console.log('isAuthenticated: ' + security.isAutenticated);
  }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe( data => {
        this.users = data;
      });
    }


    deleteUser(user: User): void {
      this.userService.deleteUser(user.id)
      .subscribe((response: any) => {console.log(response.response)});
      this.users = this.users.filter(u => u !== user);
    }

    addUser() {
      this.router.navigate(['register']);
    }

    theAlert(user: User) {

      Swal({
        title: 'Are you sure to delete this user?',
        text: 'You will not be able to recover !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {

        if (result.value) {
          this.deleteUser(user);
         // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled'
          );

        }
      });
  }

}
