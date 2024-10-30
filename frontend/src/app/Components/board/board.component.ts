import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from "../sidemenu/sidemenu.component";
import { SignOutService } from '../../Services/sign-out.service';
import { ICurrentUser } from '../../core/models/user.interface';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, RouterModule, SidemenuComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  
CurrentUser?:ICurrentUser;

Service:SignOutService = inject(SignOutService);


GetUser()
{
  this.CurrentUser = this.Service.getCurrentUser()
}

ngOnInit(): void {
  this.GetUser()
}
}
