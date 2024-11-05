import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITasks } from '../../core/models/TasksModel';
import { ICard } from '../../core/models/ICard';
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
  Id?: number;
  Tasks: ITasks[] = [];

  Cards: ICard[] = [];

  TaskService: TasksService = inject(TasksService);

  constructor() {}

  ngOnInit(): void {
    this.GetAllTasks();
  }

  async GetAllTasks() {
    try {
      const res = await firstValueFrom(this.TaskService.GetAllTasks());
      this.Tasks = res || [];

      this.Cards = [
        {
          state: 'Backlog',
          task: this.Tasks.filter(task => task.state === 'Backlog'),
        },
        {
          state: 'To do',
          task: this.Tasks.filter(task => task.state === 'To do'),
        },
        {
          state: 'Ongoing',
          task: this.Tasks.filter(task => task.state === 'Ongoing'),
        },
        {
          state: 'Done',
          task: this.Tasks.filter(task => task.state === 'Done'),
        },
        {
          state: 'Pause',
          task: this.Tasks.filter(task => task.state === 'Pause'),
        },
      ];

      console.log('Tasks sorted successfully:', this.Cards);
    } catch (error) {
      console.error('Post failed', error);
    }
  }

}
