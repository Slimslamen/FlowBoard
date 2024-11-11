import { Component, inject, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITasks } from '../../core/models/ITasks';
import { ICard } from '../../core/models/ICard';
import { TasksService } from '../../Services/CardTasks/tasks.service';
import { firstValueFrom } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  boardId!: number;
  Id?: number;
  Tasks: ITasks[] = [];
  Cards: ICard[] = [];
  TaskForm: FormGroup;
  TaskService: TasksService = inject(TasksService);

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute) {
    this.TaskForm = this.formbuilder.group({
      taskName: ['', [Validators.maxLength(15), Validators.required]],
    });
  }

  ngOnInit(): void {
    this.GetAllTasks();
    this.route.params.subscribe((params) => {
      this.boardId = params['id']; // Access the 'id' parameter from the URL
    });
  }

  async DeleteOneTask(taskId?: number) {
    if (taskId === undefined) {
      return;
    }
    try {
      await firstValueFrom(this.TaskService.DeleteTask(taskId));
      await this.GetAllTasks();
    } catch (error) {
      console.error('delete failed', error);
    }}

  async GetAllTasks() {
    try {
      const res = await firstValueFrom(this.TaskService.GetAllTasks());
      this.Tasks = res || [];

      this.Cards = [
        {
          id:"1",
          state: 'Backlog',
          task: this.Tasks.filter((task) => task.state === 'Backlog'),
        },
        {
          id:"2",
          state: 'To do',
          task: this.Tasks.filter((task) => task.state === 'To do'),
        },
        {
          id:"3",
          state: 'Ongoing',
          task: this.Tasks.filter((task) => task.state === 'Ongoing'),
        },
        {
          id:"4",
          state: 'Done',
          task: this.Tasks.filter((task) => task.state === 'Done'),
        },
        {
          id:"5",
          state: 'Pause',
          task: this.Tasks.filter((task) => task.state === 'Pause'),
        },
      ];
    } catch (error) {
      console.error('Post failed', error);
    }
  }

  async Submit(state: string) {
    if (this.TaskForm.valid) {
      const { taskName } = this.TaskForm.value;

      const newTask: ITasks = {
        taskName,
        boardId: this.boardId,
        state,
      };
      try {
        await firstValueFrom(this.TaskService.PostTask(newTask));
        await this.GetAllTasks();
      } catch (error) {
        console.error('Post failed', error);
      }

      this.TaskForm.reset();
    }
  }

  drop(event: CdkDragDrop<any>, Card: ICard) {
    console.log(event);
    console.log(Card)
    console.log(event.item.element.nativeElement.id)
 
    const taskId = event.item.element.nativeElement.id;
 
    let task = this.Tasks.find(task => task.id != null && task.id == +taskId);
    console.log(task);
    if (task != null && task.id != null) {
      task.state = Card.state
      this.TaskService.UpdateTaskState(task.id, task.state)
        .subscribe(async () => {
          await this.GetAllTasks()
        })
      }
    }
}
