import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasks } from '../../core/models/TasksModel';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

BoardId?:number;

  constructor(private http: HttpClient) { }

  setBoardId(id:number){
    this.BoardId = id;
  }
  
  getBoardId()
  {
   return this.BoardId;
  }
  GetAllTasks():Observable<ITasks[]>
  {
    return this.http.get<ITasks[]>("http://localhost:5228/api/tasks/GetUserTasks?id=" + this.BoardId, { withCredentials: true })
  }
}
