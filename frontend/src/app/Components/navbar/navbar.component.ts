import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent  {
  isDropdownOpen = false;
  isHamburgerOpen = false;
  constructor() {}


  toggleHamburger = () => {
    this.isHamburgerOpen = !this.isHamburgerOpen;
    console.log(this.isHamburgerOpen); 
  };
  closeHamburger() {
    this.isHamburgerOpen = false; 
    this.isDropdownOpen = false;  
  }

  toggleDropDown = () => {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen); 
  };

}

