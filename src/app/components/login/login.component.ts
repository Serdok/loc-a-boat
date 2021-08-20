import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { from, Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import { Account } from '../../interfaces/account';
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup = null;

  constructor(private auth: AngularFireAuth, private router: Router, private accountService: AccountService) {
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
    this.logIn().pipe(first()).subscribe(account => {
      console.log('account logged in via email');
      console.dir(account);
      from(this.router.navigate(['landing-page'])).pipe(first()).subscribe();
    });
  }

  logIn(): Observable<Account> {
    return from(this.auth.signInWithEmailAndPassword(this.email.value, this.password.value)).pipe(
      switchMap(credentials => this.getAccount(credentials)),
    );
  }

  googleLogIn(): void {
    from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
      switchMap(credentials => this.getAccount(credentials)),
      first(),
    ).subscribe(account => {
      console.log('account logged in via google');
      console.dir(account);
      from(this.router.navigate(['landing-page'])).pipe(first()).subscribe();
    });
  }

  resetPassword(): void {
    if (this.email.value.length === 0) {
      return;
    }
    this.auth.sendPasswordResetEmail(this.email.value)
      .then(() => console.log('sent password reset'));
  }

  private getAccount(credentials: UserCredential): Observable<Account> {
    const user = credentials.user;
    return this.accountService.getAccount(user.uid);
  }
}
