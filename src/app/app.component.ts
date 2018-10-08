import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login04';
  navbarOpen = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   
  }

toggleNavbar() {
 this.navbarOpen = !this.navbarOpen;
}

switchLanguage(language: string) {
 this.translate.use(language);
}

}
