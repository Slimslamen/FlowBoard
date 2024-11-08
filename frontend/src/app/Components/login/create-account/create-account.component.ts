import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { User } from '../../../core/models/user.interface';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { RegisterService } from '../../../Services/register/register.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { IError } from '../../../core/models/IError.interface';
import { validateHeaderValue } from 'http';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
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

  errorList: IError[] = [];
  errorMessage: string = "";

  isChecked: boolean = false;

  adminValidator(): ValidatorFn 
  {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = control.value === 0 || control.value === 4444;
      return isValid? null:{adminValidator: true};
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      adminCode: [0, [Validators.required, this.adminValidator()]],
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
          this.router.navigate(['/user']);
        
      } catch (error: any) {
        this.errorList = error.error;
        console.error('Post failed:', error.error);
        }}}

/*   adminFunction(ev: any) {
    console.log(ev.target.checked);
    this.isChecked = ev.target.checked;
  } */
}
