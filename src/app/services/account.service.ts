import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Account } from '../interfaces/account';
import { from, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { first, last, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: AngularFirestoreCollection<Account> = null;

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore, private storageService: StorageService) {
    this.accounts = afs.collection<Account>('account');
  }

  getAccounts(): Observable<Account[] | undefined> {
    return this.accounts.valueChanges();
  }

  getAccount(uid: string): Observable<Account | undefined> {
    return this.accounts.doc<Account>(uid).valueChanges();
  }

  addAccount(account: Account): Observable<Account | undefined> {
    return account.photoURL
      ? this.uploadPhoto(account.photoURL).pipe(switchMap(url => this.setAccount(new Account({...account, photoURL: url,}))))
      : this.setAccount(account);
  }

  private setAccount(account: Account): Observable<Account | undefined> {
    console.log('set account:');
    console.dir(account);
    return from(this.accounts.doc(account.uid).set({...account} as Account)).pipe(
      switchMap(() => this.getAccount(account.uid)),
      first()
    );
  }

  modifyAccount(account: Partial<Account>): Observable<Account | undefined> {
    return account.photoURL
      ? this.uploadPhoto(account.photoURL).pipe(switchMap(url => this.updateAccount(new Account({...account, photoURL: url,}))))
      : this.updateAccount(account);
  }

  private updateAccount(account: Partial<Account>): Observable<Account | undefined> {
    return from(this.accounts.doc(account.uid).update({...account} as Account)).pipe(
      switchMap(() => this.getAccount(account.uid)),
      first()
    );
  }

  private uploadPhoto(url: string): Observable<string | undefined> {
    const pathname = new URL(url).pathname.split('/').pop();
    const filename = this.storageService.sanitizeFilename(pathname);
    return this.storageService.uploadFileFromURL(url).pipe(
      last(),
      switchMap(percentage => this.storageService.getFile(filename)),
    );
  }
}
