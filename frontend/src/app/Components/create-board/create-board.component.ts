import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../Services/login/login.service';
import { IAccessUser, ICurrentUser, ICreateUser } from '../../core/models/user.interface';
import { IBoards } from '../../core/models/IBoards';
import { BoardsService } from '../../Services/boards/boards.service';
import { Router } from '@angular/router';
import { TasksService } from '../../Services/CardTasks/tasks.service';
import { IOneBoard } from '../../core/models/IOneBoard';
import { firstValueFrom } from 'rxjs';
import { SignOutService } from '../../Services/signout/sign-out.service';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule, ReactiveFormsModule ],
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
  SignOutService: SignOutService = inject(SignOutService);
  user?: IAccessUser;
  boards?: IBoards[];
  Images: string[] = [
    '/assets/Image1.jpg',
    '/assets/Image2.jpg',
    '/assets/Image3.jpg',
    '/assets/Image4.jpg',
    '/assets/Image5.jpg',
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      boardName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getBoards();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.loginService.getUser().subscribe(
      (user) => {
        this.user = user;
        console.log('Användaren hämtad');
      },
      (error) => {
        console.error('Ett fel uppstod vid hämtning av användaren: ', error);
      }
    );
  }
  openCreate() {
    this.isOpen = !this.isOpen;
  }
  async addBoard(e: Event) {
    e.preventDefault();
    if (this.registerForm.valid) {
      const { boardName } = this.registerForm.value;

      const newBoard: IOneBoard = {
        name: boardName,
        userId: this.boardService.getUserId(),
      };
      try {
        await firstValueFrom(this.boardService.PostBoard(newBoard));
        console.log('Post successfully:');
        this.getBoards();
        this.registerForm.reset();
      } catch (error) {
        console.log(error);
      }
    }
  }

  generateRandomImage() {
    const Randomnmb = Math.floor(Math.random() * this.Images.length);
    return this.Images[Randomnmb];
  }
  NavigateToBoard(id: number) {
    this.boardService.setBoardId(id);
    this.TaskService.setBoardId(id);
    this.router.navigate(['/Board', id]);
  }

  getBoards() {
    this.boardService.getAllUserBoards().subscribe(
      (board) => {
        this.boards = board;
        console.log(board);
      },
      (error) => {
        console.log('Not working');
      }
    );
  }
  async RemoveBoard(id: number) {
    if (id === undefined) {
      return;
    }
    try {
      await firstValueFrom(this.boardService.DeleteBoard(id));
      console.log('den valda tasken togs bort');
      await this.getBoards();
    } catch (error) {
      console.error('delete failed', error);
    }
  }
}
