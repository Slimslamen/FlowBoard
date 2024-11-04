 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoards } from '../../core/models/boards.interface';
import { IOneBoard } from '../../core/models/OneBoard';

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
    return this.BoardId;
   }
   setBoardId(id:number){
    this.BoardId = id;
   }

   getAllUserBoards(): Observable<IBoards[]>{
     return this.http.get<IBoards[]>("http://localhost:5228/api/boards?userId=" + this.userId, { withCredentials: true })
   }
   getUserBoard(): Observable<IOneBoard>{
    return this.http.get<IOneBoard>("http://localhost:5228/api/boards/id?id=" + this.BoardId, { withCredentials: true })
  }

 }
