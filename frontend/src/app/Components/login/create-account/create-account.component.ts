import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../../../core/models/user.interface';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  user: User[] = [

  ]
  isChecked: boolean = false;
  adminFunction(ev: any) {
    console.log(ev.target.checked);
    this.isChecked = ev.target.checked;
  }
}
