import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Account } from '../../interfaces/account';
import { AccountService } from '../../services/account.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  account$: Observable<Account> = null;

  constructor(private auth: AngularFireAuth, private router: Router, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.auth.user.subscribe(user => this.account$ = (user ? this.accountService.getAccount(user.uid) : null));
    this.account$?.subscribe(account => {
      console.log('navbar: fetched new account');
      console.dir(account);
    });
  }

  logOut(): void {
    from(this.auth.signOut()).pipe(
      tap(() => this.account$ = null),
    ).subscribe(() => {
      console.log('user logged out');
      from(this.router.navigate(['first-page'])).subscribe();
    });
  }
}
