import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login/login.service';
import { CommonModule } from '@angular/common';
import { CurrentUser, ICurrentUser } from '../../../core/models/user.interface';
import { firstValueFrom } from 'rxjs';
import { BoardsService } from '../../../Services/boards/boards.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  loginForm: FormGroup;
  user?: CurrentUser;

  IsGood: boolean = true;

  private LoginService: LoginService = inject(LoginService);
  private BoardsService: BoardsService = inject(BoardsService);

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  loginUser() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      const newUser: ICurrentUser = {
        username,
        password,
      };
      this.LoginService.postLoginUser(newUser).subscribe(
        (response) => {
          this.BoardsService.setUserId(response.userId);
          if (response.roles == 'user')
            this.router.navigate(['/createBoard', response.userId]);
          else if (response.roles == 'admin')
            this.router.navigate(['/AdminBoard', response.userId]);
          this.IsGood = true;
        },
        (error) => {
          console.error('Post failed', error);
          this.IsGood = false;
        }
      );
    }
  }
}
