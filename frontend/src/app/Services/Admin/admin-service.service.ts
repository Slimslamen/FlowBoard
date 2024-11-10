import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccessUser } from '../../core/models/user.interface';
import { IBoards } from '../../core/models/IBoards';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  GetAllUsersForAdmin():Observable<IAccessUser[]>{
    return this.http.get<IAccessUser[]>("http://localhost:5228/api/users/GetAllUsers", {withCredentials:true})
  }
  GetUserBoardsForAdmin(id:string):Observable<IBoards[]>{
    return this.http.get<IBoards[]>("http://localhost:5228/api/users/GetUserBoard?id=id"+id, {withCredentials:true})
  }
  DeleteUserForAdmin(userId:string):Observable<IAccessUser>{
    const headers={'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE'
    }
    return this.http.delete<IAccessUser>("http://localhost:5228/api/users/DeleteUser?userId="+ userId,{'headers':headers, withCredentials: true})
  }
  
}
