import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { SignOutService } from '../../Services/signout/sign-out.service';
import { ICurrentUser } from '../../core/models/user.interface';
import { IBoards } from '../../core/models/boards.interface';
import { LoginService } from '../../Services/login/login.service';
// import { BoardsService } from '../../Services/boards/boards.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, RouterModule, SidemenuComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  CurrentUser?: ICurrentUser;

  boards: IBoards[] = [];

  Service: SignOutService = inject(SignOutService); // för att kunna hämta användarens namn o visa upp på boarden
  loginService: LoginService = inject(LoginService);

  // boardsService:BoardsService = inject(BoardsService);

  GetUser() {
    const currentUser = this.Service.getCurrentUser();
    if (currentUser) {
      this.CurrentUser = currentUser;
      console.log("Användarnamn: " + this.CurrentUser?.username);
    } else {
      console.warn("Ingen användare är inloggad.");
    }
  }
  

  ngOnInit(): void {
    this.GetUser();
    // this.boardsService.getAllUserBoards().subscribe(boards => {
    // this.boards = boards as IBoards[];
    // });
  }
}
