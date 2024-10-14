import { Component } from '@angular/core';
import { ITasks } from './TasksModel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

TasksArray: ITasks[][] = [
  [
    { id: 1, task: "Clean" },
    { id: 2, task: "Shower" }
  ],
  [
    { id: 1, task: "Eat" },
    { id: 2, task: "Sleep" }
  ],
  [
    { id: 1, task: "Train" },
    { id: 2, task: "TV" }
  ]
];
}
