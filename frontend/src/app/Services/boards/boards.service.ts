 import { HttpClient } from '@angular/common/http';
 import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoards } from '../../core/models/boards.interface';

 @Injectable({
   providedIn: 'root'
 })
 export class BoardsService {

   constructor(private http: HttpClient) { }
   url =" http://localhost:5228/api/boards/";

   getAllUserBoards(): Observable<IBoards[]>{
     return this.http.get<IBoards[]>(this.url, { withCredentials: true })
   }

 }
