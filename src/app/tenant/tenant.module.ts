import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { CardModule } from 'primeng/card';
import { TenantEditComponent } from './components/tenant-edit/tenant-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ValidatePasswordDirective } from './directives/validate-password.directive';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    TenantDetailComponent,
    TenantEditComponent,
    ValidatePasswordDirective
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
  ]
})
export class TenantModule {
}
