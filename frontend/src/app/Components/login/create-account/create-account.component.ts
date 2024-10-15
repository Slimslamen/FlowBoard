import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  isChecked : boolean = false
adminFunction(ev: any) {
  console.log(ev.target.checked);
  this.isChecked = ev.target.checked;

}

}
