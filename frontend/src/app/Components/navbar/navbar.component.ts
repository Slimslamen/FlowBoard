import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignOutService } from '../../Services/signout/sign-out.service'; 
import { response } from 'express';
import { log } from 'console';
import { ICurrentUser } from '../../core/models/user.interface';

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

  signOutService: SignOutService = inject(SignOutService);
  
  user? : ICurrentUser;

  isDropdownOpen = false;
  isHamburgerOpen = false;
  constructor() {}

  signOut()
  {
    this.user = this.signOutService.getCurrentUser()
    if(!this.user)
      console.error("Not user is signed in")
    if(this.user)
    this.signOutService.postSignOut(this.user).subscribe(
      (response) => {
        console.log('Succesfully logged out:', response);
      },
      (error) => {
        console.error('Post failed', error);
      }
    )
  }

  toggleHamburger = (e:Event) => {
    e.preventDefault();
    this.isHamburgerOpen = !this.isHamburgerOpen;
    console.log(this.isHamburgerOpen); 
  };
  closeHamburger(e:Event) {
    e.preventDefault();
    this.isHamburgerOpen = false; 
    this.isDropdownOpen = false;  
  }

  toggleDropDown = (e:Event) => {
    e.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen); 
  };

}

