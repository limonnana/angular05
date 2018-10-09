import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {AuthenticationService} from "./services/authentication.service";
import { RegisterService} from "./services/register.service";
import {UserService} from "./services/user.service";
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CookieService } from 'ngx-cookie-service';
import { SecurityService } from './services/security.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangePassComponent } from './users/change-pass/change-pass.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    UserListComponent,
    EditUserComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({

      loader: {
                  provide: TranslateLoader,
                  useFactory: HttpLoaderFactory,
                  deps: [HttpClient]
      }
    })
   ],
  providers: [AuthenticationService, UserService, CookieService, RegisterService, SecurityService],
  bootstrap: [AppComponent]
})


export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
 }
 
 
