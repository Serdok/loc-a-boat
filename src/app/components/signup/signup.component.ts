import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Account } from '../../interfaces/account';
import { from, Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupGroup: FormGroup = null;

  constructor(private auth: AngularFireAuth, private router: Router, private accountService: AccountService) {
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
    this.signUp().pipe(
      first()
    ).subscribe(account => {
      console.log('account created via email');
      console.dir(account);
      from(this.router.navigate(['landing-page'])).pipe(first()).subscribe();
    });

  }

  signUp(): Observable<Account> {
    return from(this.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)).pipe(
      switchMap(credentials => this.createAccount(credentials)),
    );
  }

  googleSignUp(): void {
    from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
      switchMap(credentials => this.createAccount(credentials)),
      first(),
    ).subscribe(account => {
      console.log('account created via google sign-up');
      console.dir(account);
      from(this.router.navigate(['landing-page'])).pipe(first()).subscribe();
    });

  }

  private createAccount(credentials: UserCredential): Observable<Account> {
    return this.accountService.addAccount(new Account(credentials.user));
  }
}
