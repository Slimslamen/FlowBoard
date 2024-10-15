import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { BoardComponent } from "./Components/board/board.component";
import { AdminComponent } from "./Components/login/admin/admin.component";
import { UserComponent } from "./Components/login/user/user.component";
import { RouterModule } from '@angular/router';
import { HeroPageComponent } from './Components/hero-page/hero-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BoardComponent, AdminComponent, UserComponent, HeroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
