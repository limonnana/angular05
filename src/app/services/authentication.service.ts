import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  response = "";

  login(username: string, password: string) {
     
    return this.http.post<any>(`${environment.apiUrl}/login`,{username:username, password:password});
   
  }
}
