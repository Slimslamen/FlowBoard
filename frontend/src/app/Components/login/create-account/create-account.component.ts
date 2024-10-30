import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { User } from '../../../core/models/user.interface';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { RegisterService } from '../../../Services/register.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  private registerService: RegisterService = inject(RegisterService);

  

  isChecked: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      adminCode: ['', [Validators.maxLength]],
    });
  }
  ngOnInit(): void {}

  
  async addUser(){
    if (this.registerForm.valid) {
      const { username, email, password, adminCode } = this.registerForm.value;

      const newUser: User = {
        username, 
        email, 
        password, 
        adminCode
      };

      try {
        const response = await firstValueFrom(this.registerService.postUsers(newUser));
        console.log('Post successful:', response);
        if(this.registerForm.value.adminCode == 4444)
        {
          this.router.navigate(['/admin']);
        }
        else if(this.registerForm.value.adminCode == 0)
        {
          this.router.navigate(['/user']);
        }
      } catch (error) {
        console.error('Post failed:', error);
      }
    }
  }
  CheckAdmin()
  {
    if(this.registerForm.valid)
    {
      var admin = this.registerForm.value.adminCode
      if(admin == null)
         admin = 0;
       else
       admin = admin;
    }
  } 
/*   adminFunction(ev: any) {
    console.log(ev.target.checked);
    this.isChecked = ev.target.checked;
  } */
}
