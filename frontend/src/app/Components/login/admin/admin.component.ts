import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ICurrentUser } from '../../../core/models/user.interface';
import { AdminLoginService } from '../../../Services/admin-login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  adminForms: FormGroup;

  IsGood : boolean = true;

  private adminService: AdminLoginService = inject(AdminLoginService)

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.adminForms = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  adminLogin() {
    if (this.adminForms.valid) {
      const { username, password } = this.adminForms.value;

      const newUser: ICurrentUser = {
        username,
        password,
      };
      this.adminService.postAdminLogin(newUser).subscribe(
        (response) => {
          console.log('Post successfully:', response);
          this.router.navigate(['/Board']);
          this.IsGood = true;
        },
        (error) => {
          console.error('Post failed', error);
           this.IsGood = false
        }
      );
    }
  }
}
