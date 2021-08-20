import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Account } from '../interfaces/account';
import { from, iif, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { first, last, switchMap, tap } from 'rxjs/operators';

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
    return account.photoURL ? this.uploadPhotoAndUpdateAccount(account) : this.setAccount(account);
  }

  private setAccount(account: Account): Observable<Account | undefined> {
    console.log('set account:');
    console.dir(account);
    return from(this.accounts.doc(account.uid).set({ ...account} as Account)).pipe(
      switchMap(() => this.getAccount(account.uid)),
      first()
    );
  }

  modifyAccount(account: Partial<Account>): Observable<Account | undefined> {
    return account.photoURL ? this.uploadPhotoAndUpdateAccount(account) : this.updateAccount(account);
  }

  private updateAccount(account: Partial<Account>): Observable<Account | undefined> {
    return from(this.accounts.doc(account.uid).update({ ...account} as Account)).pipe(
      switchMap(() => this.getAccount(account.uid)),
      first()
    );
  }

  private uploadPhotoAndUpdateAccount(account: Partial<Account>): Observable<Account | undefined> {
    const path: string = account.photoURL.split('/').pop().split('?')[0];
    const filename = path.substring(path.lastIndexOf('%2F')).replace('%2F', '');
    return this.storageService.getFile(filename).pipe(
      switchMap(url => iif(
          () => !!url,
          this.updateAccount(new Account(account)).pipe(tap(acc => console.log('update account, photo found'))),
          this.storageService.uploadFileFromURL(account.photoURL).pipe(
            last(),
            switchMap(percentage => this.storageService.getFile(filename)),
            switchMap(link => this.updateAccount(new Account({ ...account, photoURL: link, }))),
            tap(acc => console.log('update account, photo not found and downloaded'))
          )
        )
      ),
      first(),
    );
  }
}
