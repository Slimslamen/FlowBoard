import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from "../sidemenu/sidemenu.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, RouterModule, SidemenuComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
