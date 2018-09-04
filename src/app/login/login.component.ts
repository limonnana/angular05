import { Component, OnInit , NgModule} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';




@NgModule({
    imports: [
    
    ],
  declarations: [
    LoginFormComponent
  ]
  
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   


  constructor(
    
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    

  }

 

}
