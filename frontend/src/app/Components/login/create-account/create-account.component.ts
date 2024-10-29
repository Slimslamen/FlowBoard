import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../../../core/models/user.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../../Services/register.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent implements OnInit {

  registerForm: FormGroup;
  private registerService: RegisterService = inject(RegisterService)

  isChecked: boolean = false;

  constructor(private formBuilder: FormBuilder)
  {
    this.registerForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      adminCode: ["", [Validators.maxLength]]
    });
  } 
    ngOnInit(): void {}

    addUser(){
    if (this.registerForm.valid) {
      const {username, email, password, adminCode} = this.registerForm.value;

    const newUser: User = {
    username, email, password, adminCode
  };
  this.registerService.postUsers(newUser).subscribe(
    response => {
      console.log('Post successfully:', response);
    },
    error => {
      console.error('Post failed', error);
    }
  );
}
}
adminFunction(ev: any) {
    console.log(ev.target.checked);
    this.isChecked = ev.target.checked;
  }
  }

 



  

