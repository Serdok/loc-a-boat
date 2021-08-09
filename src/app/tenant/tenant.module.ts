import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { TenantEditComponent } from './components/tenant-edit/tenant-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordMatchValidatorDirective } from './directives/password-match-validator.directive';


@NgModule({
  declarations: [
    TenantDetailComponent,
    TenantEditComponent,
    PasswordMatchValidatorDirective,
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TenantModule {
}
