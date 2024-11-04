import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../Services/login/login.service';
import {
  CurrentUser,
  ICurrentUser,
  User,
} from '../../core/models/user.interface';

import { IBoards } from '../../core/models/boards.interface';
import { BoardsService } from '../../Services/boards/boards.service';
import { Router } from '@angular/router';
import { TasksService } from '../../Services/CardTasks/tasks.service';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-board.component.html',
  styleUrl: './create-board.component.css',
})
export class CreateBoardComponent implements OnInit {
  cardCount: number = 0; // Antalet cards som användaren vill skapa
  cards: string[] = []; // En array för att hålla cardnamn
  isOpen: boolean = false;
  registerForm: FormGroup;
  loginService: LoginService = inject(LoginService);
  boardService: BoardsService = inject(BoardsService);
  TaskService: TasksService = inject(TasksService);
  user?: CurrentUser;
  boards?: IBoards[];
  Images: string[] = [
    '../../../assets/Image1.jpg',
    '../../../assets/Image2.jpg',
    '../../../assets/Image3.jpg',
  ];
  SavedImg!: string;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.registerForm = this.formBuilder.group({
      boardName: ['', [Validators.required]],
      cardName: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.getBoards();
    this.generateRandomImage();
  }
  openCreate() {
    this.isOpen = !this.isOpen;
  }
  addBoard() {}

  generateRandomImage() {
    const Randomnmb = Math.floor(Math.random() * this.Images.length);
    this.SavedImg = this.Images[Randomnmb];
  }
  NavigateToBoard(id: number) {
    this.boardService.setBoardId(id);
    this.TaskService.setBoardId(id)
    this.router.navigate(['/Board',id])
  }

  getBoards() {
    this.boardService.getAllUserBoards().subscribe(
      (board) => {
        this.boards = board;
        console.log(board);
        this.generateRandomImage();
      },
      (error) => {
        console.log('Not working');
      }
    );
  }

  updateCardCount(event: Event) {
    const target = event.target as HTMLSelectElement; // Typkonvertering
    const count = Number(target.value); // Hämta värdet som ett nummer
    this.cardCount = count;
    this.cards = Array(count).fill(''); // Initiera arrayen med antal tomma element
  }
}
