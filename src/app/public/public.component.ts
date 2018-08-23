import { Component } from '@angular/core';
// import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  // providers: [AuthenticationService]
})
export class PublicComponent {
  // private isLoggedIn: Boolean = null;
  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }

  // constructor(public authService: AuthenticationService) {
  //   this.authService.user.subscribe(user => {
  //     if (user === null) {
  //       this.isLoggedIn = false;
  //     } else {
  //       this.isLoggedIn = true;
  //     }
  //   })
  // }
}
