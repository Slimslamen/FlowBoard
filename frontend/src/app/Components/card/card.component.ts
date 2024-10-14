import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITasks } from './TasksModel';
import { ITaskArray } from './TaskarrayModel';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  Tasks: ITasks[] = [
    { id: 1, task: 'Clean' },
    { id: 2, task: 'Shower' },
  ];

  TasksArray: ITaskArray[]= [
    {
      title: "Backlog",
      tasks: this.Tasks
    },
    {
      title: "To do",
      tasks: this.Tasks
    }
    ,
    {
      title: "Ongoing",
      tasks: this.Tasks
    },
    {
      title: "Done",
      tasks: this.Tasks
    },
    {
      title: "Blocked",
      tasks: this.Tasks
    }
  ];
}
