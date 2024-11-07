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
  GetUserBoards(userId:string):Observable<IBoards[]>{
    return this.http.get<IBoards[]>("http://localhost:5228/api/users/GetUserBoard?userId="+userId, {withCredentials:true})
  }
}
