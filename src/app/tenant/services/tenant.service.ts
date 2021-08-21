import { Injectable } from '@angular/core';
import { Tenant } from '../interfaces/tenant';
import { from, iif, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AccountService } from '../../services/account.service';
import { first, switchMap } from 'rxjs/operators';
import { StorageService } from '../../services/storage.service';
import { Account } from '../../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  tenants: AngularFirestoreCollection<Tenant>;

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore, private accountService: AccountService,
              private storageService: StorageService) {
    this.tenants = afs.collection<Tenant>('account');
  }

  getTenants(): Observable<Tenant[] | undefined> {
    return this.tenants.valueChanges();
  }

  getTenant(uid: string): Observable<Tenant | undefined> {
    return this.tenants.doc<Tenant>(uid).valueChanges();
  }

  addTenant(tenant: Tenant): Observable<Tenant | undefined> {
    return this.accountService.addAccount(new Account(tenant)).pipe(
      switchMap(account => iif(
        () => !!account,
        this.upgradeAccount(tenant.uid, tenant.hasPermit),
        of(undefined)
      )),
    );
  }

  modifyTenant(tenant: Partial<Tenant>): Observable<Tenant | undefined> {
    return this.accountService.modifyAccount(new Tenant(tenant)).pipe(
      switchMap(account => iif(
        () => !!account,
        this.updateTenant(tenant),
        of(undefined)
      )),
    );
  }

  private updateTenant(tenant: Partial<Tenant>): Observable<Tenant | undefined> {
    return from(this.tenants.doc<Tenant>(tenant.uid).update({ ...tenant} as Tenant)).pipe(
      switchMap(() => this.getTenant(tenant.uid)),
      first()
    );
  }

  upgradeAccount(uid: string, hasPermit?: boolean): Observable<Tenant | undefined> {
    return this.accountService.getAccount(uid).pipe(
      switchMap(account => this.modifyTenant({ ...account, hasPermit: hasPermit ?? false})),
    );
  }
}
