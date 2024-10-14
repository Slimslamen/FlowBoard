import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
