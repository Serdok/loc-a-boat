import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant';
import { TenantService } from '../../services/tenant.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.sass']
})
export class TenantDetailComponent implements OnInit {
  tenant$: Observable<Tenant> = null;

  constructor(private tenantService: TenantService, private auth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.auth.user.subscribe(user => this.tenant$ = (user ? this.tenantService.getTenant(user.uid) : null));
    this.tenant$?.subscribe(tenant => {
      console.log('tenant-detail: fetched new tenant');
      console.dir(tenant);
    });
  }
}
