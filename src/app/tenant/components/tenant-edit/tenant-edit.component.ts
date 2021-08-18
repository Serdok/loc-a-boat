import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant';
import { map, switchMap, tap } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../directives/password-match-validator.directive';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.sass']
})
export class TenantEditComponent implements OnInit {
  tenant$: Observable<Tenant> = null;
  id: string = null;
  group: FormGroup = null;

  constructor(private router: Router, private tenantService: TenantService, private fb: FormBuilder, private auth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.tenant$ = this.auth.user.pipe(
      switchMap((user: User) => this.tenantService.getTenant(user.email)),
      map((tenant: Tenant) => {
        // Invalidate current password
        tenant.password = '';
        this.id = tenant.id;
        return tenant;
      }),
      tap((tenant: Tenant) => {
        // Setup form controls
        this.group = this.fb.group({
          email: [tenant.email, Validators.nullValidator],
          firstname: [tenant.firstname, Validators.required],
          lastname: [tenant.lastname, Validators.required],
          phone: [tenant.phone, Validators.required],
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
    this.tenantService.updateTenant({id: this.id, ...this.group.value});
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
