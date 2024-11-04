import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { SignOutService } from '../../Services/signout/sign-out.service';
import { CurrentUser, ICurrentUser } from '../../core/models/user.interface';
import { IBoards } from '../../core/models/boards.interface';
import { LoginService } from '../../Services/login/login.service';
import { BoardsService } from '../../Services/boards/boards.service';
import { IOneBoard } from '../../core/models/OneBoard';
// import { BoardsService } from '../../Services/boards/boards.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, RouterModule, SidemenuComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  CurrentUser?: CurrentUser;
 

  OneBoard?: IOneBoard;

  Service: SignOutService = inject(SignOutService); // för att kunna hämta användarens namn o visa upp på boarden
  loginService: LoginService = inject(LoginService);
  BoardService: BoardsService = inject(BoardsService)

ngOnInit(): void {
  this.getCurrentUser()
  this.getBoard();
  }
  
  getCurrentUser() {
    this.loginService.getUser().subscribe(
    (user) => {
      this.CurrentUser = user;
      console.log("Användaren hämtad"); 
    },
    (error) => {
      console.error("Ett fel uppstod vid hämtning av användaren: ", error);
    }
  );
  }
  
  getBoard()
  {

    this.BoardService.getUserBoard().subscribe(
      (board) => {
        this.OneBoard = board;
      },
      (error) => {
        console.log('Not working');
      }
    );
  }

  
}
