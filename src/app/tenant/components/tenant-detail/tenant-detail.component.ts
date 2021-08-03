import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant';
import { TenantService } from '../../services/tenant.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.sass']
})
export class TenantDetailComponent implements OnInit {
  tenant$!: Observable<Tenant>;

  constructor(private route: ActivatedRoute, private tenantService: TenantService) {
  }

  ngOnInit(): void {
    this.tenant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.tenantService.getTenant(params.get('id')))
    );
  }

}
