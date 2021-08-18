import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { Router } from '@angular/router';
import User = firebase.User;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  user$: Observable<User> = null;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user$ = this.auth.user;
  }

  ngOnInit(): void {
    this.auth.currentUser.then(console.log);
  }

  logOut(): void {
    this.auth.signOut()
      .then(user => console.log(user))
      .then(() => this.router.navigate(['first-page']));
  }
}
