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
  PostTask= (Task:ITasks):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify(Task);
    console.log(body)
    console.log(Task)
    return this.http.post("http://localhost:5228/api/tasks/PostTask", body,{'headers':headers, withCredentials: true});
  }
}
