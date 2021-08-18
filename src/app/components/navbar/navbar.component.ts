import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import User = firebase.User;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  user$: Observable<User>;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user$ = this.auth.user;
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.auth.signOut()
      .then(user => console.log(user))
      .then(() => this.router.navigate(['first-page']));
  }
}
