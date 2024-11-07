import { Component, inject, OnInit } from '@angular/core';
import { AdminServiceService } from '../../Services/Admin/admin-service.service';
import { first, firstValueFrom } from 'rxjs';
import { CurrentUser } from '../../core/models/user.interface';

@Component({
  selector: 'app-admin-board',
  standalone: true,
  imports: [],
  templateUrl: './admin-board.component.html',
  styleUrl: './admin-board.component.css',
})
export class AdminBoardComponent implements OnInit {
  Users?: CurrentUser[] = [];

  AdminService: AdminServiceService = inject(AdminServiceService);

  constructor() {}

  ngOnInit(): void {
    this.GetUsers();
  }

  async GetUsers() {
    try {
      const res = await firstValueFrom(this.AdminService.GetAllUsers());
      this.Users = res;
      console.log('Post Succesfully', res);
    } catch (error) {
      console.log(error);
    }
  }

  DeleteUser(id:string) {
    throw new Error('Method not implemented.');
  }
  GoToUserBoard(id:string) {

    
  }
}
