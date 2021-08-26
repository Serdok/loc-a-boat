import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Boat } from '../interfaces/boat';
import { BOATS } from '../models/boats';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor() {
  }

  getBoats(): Observable<Boat[]> {
    return of(BOATS);
  }

  getBoat(id: string): Observable<Boat | undefined> {
    return of(BOATS.find(boat => boat.id === id));
  }

  addBoat(boat: Boat): Observable<Boat | undefined> {
    return of(undefined);
  }

  modifyBoat(boat: Partial<Boat>): Observable<Boat | undefined> {
    return this.updateBoat(boat);
  }

  private updateBoat(boat: Partial<Boat>): Observable<Boat | undefined> {
    return of(undefined);
  }
}
