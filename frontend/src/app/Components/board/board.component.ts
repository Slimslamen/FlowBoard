import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from "../sidemenu/sidemenu.component";
import { SignOutService } from '../../Services/signout/sign-out.service'; 
import { ICurrentUser } from '../../core/models/user.interface';
import { IBoards } from '../../core/models/boards.interface';
// import { BoardsService } from '../../Services/boards/boards.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, RouterModule, SidemenuComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  
CurrentUser?:ICurrentUser;

boards: IBoards[] = [];

Service:SignOutService = inject(SignOutService); // för att kunna hämta användarens namn o visa upp på boarden

// boardsService:BoardsService = inject(BoardsService);

GetUser()
{
  this.CurrentUser = this.Service.getCurrentUser()
}



ngOnInit(): void {
  this.GetUser()
  // this.boardsService.getAllUserBoards().subscribe(boards => {
  // this.boards = boards as IBoards[];
  // });
}


}
