import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentUser } from '../core/models/user.interface';
import { SignOutService } from './sign-out.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  signOutService:SignOutService = inject(SignOutService);

  constructor(private http: HttpClient) { }
  url =" http://localhost:5228/api/auth/";


  postLoginUser = (user:ICurrentUser):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log(body)
    this.signOutService.setCurrentUser(user);
    console.log(user)
    return this.http.post(this.url + 'login', body,{'headers':headers} )
  }
}
