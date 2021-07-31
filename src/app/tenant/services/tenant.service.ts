import { Injectable } from '@angular/core';
import { Tenant } from '../interfaces/tenant';
import { Observable, of } from 'rxjs';
import { TENANTS } from '../models/tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantService {


  constructor() {
  }

  getTenants(): Observable<Tenant[]> {
    return of(TENANTS);
  }

  getTenant(id: string): Observable<Tenant> {
    return of(TENANTS.find(tenant => tenant.id === id));
  }
}
