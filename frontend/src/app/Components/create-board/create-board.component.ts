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
import { CurrentUser, ICurrentUser, User } from '../../core/models/user.interface';

import { IBoards } from '../../core/models/boards.interface';
import { BoardsService } from '../../Services/boards/boards.service';
import { error } from 'console';

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
  user?: CurrentUser;
  boards?: IBoards[];

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      boardName: ['', [Validators.required]],
      cardName: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
   this.getBoards();
  }
  openCreate() {
    this.isOpen = !this.isOpen;
  }
  addBoard() {

  }


  
  getBoards(){
    this.boardService.getAllUserBoards().subscribe(
      (board) => {
        this.boards = board;
        console.log("hämtat boards");
      },
      (error) => {
        console.log("Not working");
      });
  }
 


  updateCardCount(event: Event) {
    const target = event.target as HTMLSelectElement; // Typkonvertering
    const count = Number(target.value); // Hämta värdet som ett nummer
    this.cardCount = count;
    this.cards = Array(count).fill(''); // Initiera arrayen med antal tomma element
  }


  
}
