import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasks } from '../../core/models/ITasks';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

BoardId?:number;
taskId?:number;


  constructor(private http: HttpClient) { }

  setBoardId(id:number){
    this.BoardId = id;
  }
  getBoardId()
  {
   return this.BoardId;
  }
  setTaskId(id:number)
  {
   this.taskId = id;
  }

  GetAllTasks():Observable<ITasks[]>
  {
    return this.http.get<ITasks[]>("http://localhost:5228/api/tasks/GetUserTasks?id=" + this.BoardId, { withCredentials: true })
  }
  PostTask = (Task:ITasks):Observable<any> => {
    const headers={'content-type': 'application/json'}
    const body=JSON.stringify(Task);
    console.log(body)
    console.log(Task)
    return this.http.post("http://localhost:5228/api/tasks/PostTask", body,{'headers':headers, withCredentials: true});
  }

  DeleteTask = (taskId:number):Observable<any> => {
    const headers={'content-type': 'application/json'
    }
    return this.http.delete("http://localhost:5228/api/tasks/id?id=" + taskId,{'headers':headers, withCredentials: true});
  }
  UpdateTaskState(taskId: number, taskState: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ State: taskState});
 
    return this.http.patch(`http://localhost:5228/api/tasks/change-state/${taskId}`, body, {'headers':headers, withCredentials: true });
}

}
