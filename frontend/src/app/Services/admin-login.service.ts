import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICurrentUser } from '../core/models/user.interface';
import { Observable } from 'rxjs';
import { SignOutService } from './sign-out.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  signOutService:SignOutService = inject(SignOutService);

  constructor(private http: HttpClient) { }
  url =" http://localhost:5228/api/auth/";


  postAdminLogin = (user:ICurrentUser):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log(body)
    this.signOutService.setCurrentUser(user);
    console.log(user)
    return this.http.post(this.url + 'login', body,{'headers':headers} )
  }
}
