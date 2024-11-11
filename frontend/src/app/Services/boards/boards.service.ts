 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoards } from '../../core/models/IBoards';
import { IOneBoard } from '../../core/models/IOneBoard';

 @Injectable({
   providedIn: 'root'
 })
 export class BoardsService {

  userId?:string;
  BoardId?: number;

   constructor(private http: HttpClient) { }

  setUserId(id:string){
    this.userId = id;
  }
  getUserId()
  {
   return this.userId;
  }

   getBoardId()
   {
    return this.BoardId;
   }
   setBoardId(id:number){
    this.BoardId = id;
   }

  getAllUserBoards(): Observable<IBoards[]>{
     return this.http.get<IBoards[]>("http://localhost:5228/api/boards?userId=" + this.userId, { withCredentials: true })
  }
  FetchUserBoardsForAdmin(userId:string): Observable<IBoards[]>{
    return this.http.get<IBoards[]>("http://localhost:5228/api/boards?userId=" + userId, { withCredentials: true })
  }
  getOneUserBoard(): Observable<IOneBoard>{
    return this.http.get<IOneBoard>("http://localhost:5228/api/boards/id?id=" + this.BoardId, { withCredentials: true })
  }

  PostBoard = (Board:IOneBoard):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify(Board);
    console.log(body)
    return this.http.post("http://localhost:5228/api/boards/PostBoard", body,{'headers':headers, withCredentials: true});
  }
  DeleteBoard = (BoardId:number):Observable<any> => {
    const headers={'content-type': 'application/json'
    }
    return this.http.delete("http://localhost:5228/api/boards/DeleteBoard?id=" + BoardId,{'headers':headers, withCredentials: true});
  }
 }
