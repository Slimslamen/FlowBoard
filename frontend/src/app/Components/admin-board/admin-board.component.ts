import { Component, inject, OnInit } from '@angular/core';
import { AdminServiceService } from '../../Services/Admin/admin-service.service';
import { firstValueFrom } from 'rxjs';
import { IAccessUser } from '../../core/models/user.interface';
import { BoardsService } from '../../Services/boards/boards.service';
import { IBoards } from '../../core/models/IBoards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-board.component.html',
  styleUrl: './admin-board.component.css',
})
export class AdminBoardComponent implements OnInit {
  Users?: IAccessUser[] = [];
  User?:IAccessUser;
  ButtonIndex?:number;
  Boards: IBoards[] = [];
  text:string = "";
  Toggle: boolean = false;

  AdminService: AdminServiceService = inject(AdminServiceService);
  BoardsService: BoardsService = inject(BoardsService);

  constructor() {}

  ngOnInit(): void {
    this.GetUsers();
  }

  FindUser(id:string)
  {
    this.User = this.Users?.find(user => user.id == id)
  }
  async GetUsers() {
    try {
      const res = await firstValueFrom(this.AdminService.GetAllUsersForAdmin());
      this.Users = res;

      console.log('Post Succesfully', res);
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteUser(id: string) {
    if (id === undefined) {
      return;
    }
    try {
      await firstValueFrom(this.AdminService.DeleteUserForAdmin(id))
      console.log("Successfully");
      await this.GetUsers();
      
    } catch (error) {
      console.log(error);
    }
  }

  async GoToUserBoard(id: string, index:number) {
    this.Toggle = !this.Toggle;
    try {
      const res = await firstValueFrom(this.AdminService.GetUserBoardsForAdmin(id));
      this.Boards = res;
      this.FindUser(id)
      this.ButtonIndex = index
    } catch (error) {
      console.log(error);
    }
  }
}
