import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../core/models/user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }
  url =" http://localhost:5228/api/auth/";


  postUsers = (user:User):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.url + 'register', body,{'headers':headers} )
  }
}
