import { Inject, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor(private translate: TranslateService,@Inject(LOCAL_STORAGE) private localStorage: WebStorageService) {
    this.setLanguage(translate);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.localStorage.set("language",language);
   }

   setLanguage(translate: TranslateService){
    if(this.localStorage.get('language')){
      translate.setDefaultLang(this.localStorage.get('language'));
      translate.use(this.localStorage.get('language'));
  }else {
       translate.setDefaultLang('en');
       translate.use('en');
       this.localStorage.set("language","en");
  }

}

}
