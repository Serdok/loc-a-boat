import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { switchMap, first, last } from 'rxjs/operators';
import { Avis } from './interfaces/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  avis: AngularFirestoreCollection<Avis> = null;

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) { 
    this.avis = afs.collection<Avis>('avis');
  }

  getAvis(): Observable<Avis[] | undefined> {
    return this.avis.valueChanges();
  }

  addAvis(avis: Avis): Observable<Avis[] | undefined> {
    return this.setAvis(avis);
  }

  private setAvis(avis: Avis): Observable<Avis[] | undefined> {
    avis.id = avis.id || this.afs.createId()
    avis.idBoat = avis.idBoat || this.afs.createId()
    console.log('set avis:');
    console.dir(avis);
    return from(this.avis.doc(avis.id).set({...avis} as Avis)).pipe(
      switchMap(() => this.getAvis()),
      first()
    );
  }

  modifyAvis(avis: Partial<Avis>): Observable<Avis[] | undefined> {
    return this.updateAvis(avis);
  }

  private updateAvis(avis: Partial<Avis>): Observable<Avis[] | undefined> {
    return from(this.avis.doc(avis.id).update({...avis} as Avis)).pipe(
      switchMap(() => this.getAvis()),
      first()
    );
  }

}
