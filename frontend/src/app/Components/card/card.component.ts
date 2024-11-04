import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITasks } from '../../core/models/TasksModel';
import { ITaskArray } from '../../core/models/TaskarrayModel';
import { TasksService } from '../../Services/CardTasks/tasks.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  Id?:number;
  Tasks: ITasks[] = [];

  TasksArray: ITaskArray[] = [
    {
      title: 'Backlog',
      task: this.Tasks,
    },
    {
      title: 'To do',
      task: this.Tasks,
    },
    {
      title: 'Ongoing',
      task: this.Tasks,
    },
    {
      title: 'Done',
      task: this.Tasks,
    },
    {
      title: 'Pause',
      task: this.Tasks,
    },
  ];

  TaskService: TasksService = inject(TasksService);

  constructor() {}

  ngOnInit(): void {
    this.GetAllTasks();
  }

  async GetAllTasks() {
    try {
      const res = await firstValueFrom(this.TaskService.GetAllTasks())
      if (res) {
        this.Tasks = res;
      } else {
        this.Tasks = [];
      }
      this.TasksArray.forEach(taskArray => taskArray.task = this.Tasks);
      console.log('Post successfully:', res);
    } catch (error) {
      console.error('Post failed', error);
    }
  }
}
