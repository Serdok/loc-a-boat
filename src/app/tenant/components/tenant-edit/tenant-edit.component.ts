import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.sass']
})
export class TenantEditComponent implements OnInit {
  tenant$: Observable<Tenant> = null;

  constructor(private router: Router, private route: ActivatedRoute, private tenantService: TenantService) {
  }

  ngOnInit(): void {
    this.tenant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.tenantService.getTenant(params.get('id')))
    );
  }
}
