import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupGroup: FormGroup = null;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.signupGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.signupGroup.get('email');
  }

  get password(): AbstractControl {
    return this.signupGroup.get('password');
  }

  onSubmit(): void {
    this.signUp();
  }

  signUp(): void {
    this.auth.createUserWithEmailAndPassword(this.email.value, this.encryptPassword(this.password.value))
      .then(userCredentials => {
        if (!userCredentials.user.emailVerified) {
          this.auth.currentUser.then(currentUser => currentUser.sendEmailVerification());
        }
        return userCredentials;
      })
      .then(user => console.log(user))
      .then(() => this.router.navigate(['landing-page']));
  }

  googleSignUp(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => console.log(user))
      .then(() => this.router.navigate(['landing-page']));
  }

  encryptPassword(password: string): string {
    return password;
  }
}
