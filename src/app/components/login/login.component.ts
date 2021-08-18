import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup = null;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.loginGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.loginGroup.get('email');
  }

  get password(): AbstractControl {
    return this.loginGroup.get('password');
  }

  onSubmit(): void {
    this.logIn();
  }

  logIn(): void {
    this.auth.signInWithEmailAndPassword(this.email.value, this.encryptPassword(this.password.value))
      .then(user => console.log(user))
      .then(() => this.router.navigate(['landing-page']));
  }

  googleLogIn(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => console.log(user))
      .then(() => this.router.navigate(['landing-page']));
  }

  encryptPassword(password: string): string {
    return password;
  }

  resetPassword(): void {
    if (this.email.value.length === 0) {
      return;
    }
    this.auth.sendPasswordResetEmail(this.email.value)
      .then(() => console.log('sent password reset'));
  }
}
