import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from '../../core/models/user.interface';
import { IBoards } from '../../core/models/boards.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<CurrentUser[]>{
    return this.http.get<CurrentUser[]>("http://localhost:5228/api/users/GetAllUsers", {withCredentials:true})
  }
  GetUserBoards(id:string):Observable<IBoards[]>{
    return this.http.get<IBoards[]>("http://localhost:5228/api/users/GetUserBoard?id="+id, {withCredentials:true})
  }
  DeleteUser(userId:string):Observable<CurrentUser>{
    const headers={'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE'
    }
    return this.http.delete<CurrentUser>("http://localhost:5228/api/users/DeleteUser?userId="+ userId,{'headers':headers, withCredentials: true})
  }
  
}
