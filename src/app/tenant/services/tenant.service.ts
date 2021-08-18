import { Injectable } from '@angular/core';
import { Tenant } from '../interfaces/tenant';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  collection: AngularFirestoreCollection<Tenant>;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<Tenant>('tenants');
  }

  getTenants(): Observable<Tenant[]> {
    return this.collection.valueChanges({idField: 'id'});
  }

  getTenant(email: string): Observable<Tenant> {
    return this.firestore.collection<Tenant>('tenants', ref => ref.where('email', '==', email).limit(1))
      .valueChanges({idField: 'id'})
      .pipe(
        tap(console.log),
        map(tenants => tenants[0]),
      );

  }

  updateTenant(tenant: Tenant): void {
    this.collection.doc(tenant.id).update(tenant)
      .then(console.log);
  }
}
