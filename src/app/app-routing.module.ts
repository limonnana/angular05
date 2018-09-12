import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent} from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'users',
    component: UserListComponent
  },
  {
    path:'editUser/:id',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
