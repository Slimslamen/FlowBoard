import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITasks } from '../../core/models/TasksModel';
import { ICard } from '../../core/models/ICard';
import { TasksService } from '../../Services/CardTasks/tasks.service';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  boardId!: number;
  Id?: number;
  Tasks: ITasks[] = [];
  Cards: ICard[] = [];
  TaskForm:FormGroup;
  TaskService: TasksService = inject(TasksService);

  constructor(private fomrBulder:FormBuilder, private route: ActivatedRoute) {
    this.TaskForm = this.fomrBulder.group({
      taskName: ['', [Validators.maxLength(15), Validators.required]]
    })
  }

  ngOnInit(): void {
    this.GetAllTasks();
    this.route.params.subscribe(params => {
      this.boardId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.boardId);
    });
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

  Submit(state:string) {
    if(this.TaskForm.valid)
    {
      const { taskName } = this.TaskForm.value;

      
      const newTask: ITasks = {
        taskName,
        boardId: this.boardId,
        state
      };

      this.TaskService.PostTask(newTask).subscribe(
        response => {
          console.log('Post successfully:', response);
        }
        ,
        error => {
          console.error('Post failed', error);
        });
    }

        this.GetAllTasks()
    }

}
