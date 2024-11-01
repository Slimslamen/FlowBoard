import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class CreateBoardComponent {
  cardCount: number = 0; // Antalet cards som användaren vill skapa
  cards: string[] = []; // En array för att hålla cardnamn
  isOpen: boolean = false;
  registerForm: FormGroup;
  loginService: LoginService = inject(LoginService);
  user?: CurrentUser;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      boardName: ['', [Validators.required]],
      cardName: ['', [Validators.required, Validators.email]],
    });
  }
  openCreate() {
    this.isOpen = !this.isOpen;
  }
  addBoard() {}

  updateCardCount(event: Event) {
    const target = event.target as HTMLSelectElement; // Typkonvertering
    const count = Number(target.value); // Hämta värdet som ett nummer
    this.cardCount = count;
    this.cards = Array(count).fill(''); // Initiera arrayen med antal tomma element
  }

  getUser() {
    this.loginService.getUser().subscribe(
      user => {
        this.user = user as CurrentUser;
        console.log(this.user); 
      },
      error => {
        console.error("Ett fel uppstod vid hämtning av användaren: ", error);
      }
    );
  }
  
}
