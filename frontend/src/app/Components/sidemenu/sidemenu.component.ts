import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BoardsService } from '../../Services/boards/boards.service';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

BoardService : BoardsService = inject(BoardsService);
Id?:number;

constructor(private router:Router)
{}


GoToBoards() {
  this.Id = this.BoardService.getBoarId()
  this.router.navigate(['/createBoard',this.Id])
}

}
