import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentUser } from '../../core/models/user.interface'; 


@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  CurrentUser?: ICurrentUser;

  

  constructor(private http: HttpClient) {
    
   }
  url =" http://localhost:5228/api/auth/";

  setCurrentUser(user : ICurrentUser)
  {
    this.CurrentUser = user;
  }
  getCurrentUser()
  {
    return this.CurrentUser;
  }


  postSignOut = (user:ICurrentUser):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify({"username": user.username});
    console.log(body)
    console.log(user.username)
    return this.http.post(this.url + 'SignOut', body,{'headers':headers} )
  }
}
