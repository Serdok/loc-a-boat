import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant';
import { map, switchMap, tap } from 'rxjs/operators';
import { parsePhoneNumber, PhoneNumber } from 'libphonenumber-js';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../directives/password-match-validator.directive';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.sass']
})
export class TenantEditComponent implements OnInit {
  tenant$: Observable<Tenant> = null;
  phoneNumber: string = null;
  code: string = null;
  group: FormGroup = null;

  constructor(private router: Router, private route: ActivatedRoute, private tenantService: TenantService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.tenant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.tenantService.getTenant(params.get('id'))),
      map((tenant: Tenant) => {
        // Invalidate current password
        tenant.password = '';
        return tenant;
      }),
      tap((tenant: Tenant) => {
        // Get national phone
        const nationalPhone: PhoneNumber = parsePhoneNumber(tenant.phone);
        this.phoneNumber = nationalPhone.formatNational();
        this.code = nationalPhone.countryCallingCode.toString();
      }),
      tap((tenant: Tenant) => {
        // Setup form controls
        this.group = this.fb.group({
          email: [tenant.email, Validators.nullValidator],
          firstname: [tenant.firstname, Validators.required],
          lastname: [tenant.lastname, Validators.required],
          phone: [this.phoneNumber, Validators.required],
          hasPermit: [tenant.hasPermit, Validators.nullValidator],
          password: [null, Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])],
          confirmPassword: [null, Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])],
        }, {validators: passwordMatchValidator});
      })
    );
  }

  onSubmit(): void {
    console.log('saving');
  }

  get firstname(): AbstractControl {
    return this.group.get('firstname');
  }

  get lastname(): AbstractControl {
    return this.group.get('lastname');
  }

  get phone(): AbstractControl {
    return this.group.get('phone');
  }

  get password(): AbstractControl {
    return this.group.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.group.get('confirmPassword');
  }
}
