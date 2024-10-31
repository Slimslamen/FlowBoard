import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-board.component.html',
  styleUrl: './create-board.component.css'
})
export class CreateBoardComponent {
  cardCount: number = 0; // Antalet cards som användaren vill skapa
  cards: string[] = []; // En array för att hålla cardnamn
  isOpen: boolean = false
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      boardName: ['', [Validators.required]],
      cardName: ['', [Validators.required, Validators.email]],
      
    });
  }
  openCreate() {
this.isOpen = !this.isOpen
  }
  addBoard() {
    
  }

  updateCardCount(event: Event) {
    const target = event.target as HTMLSelectElement; // Typkonvertering
    const count = Number(target.value); // Hämta värdet som ett nummer
    this.cardCount = count;
    this.cards = Array(count).fill(''); // Initiera arrayen med antal tomma element
  }
  
  
  
}
