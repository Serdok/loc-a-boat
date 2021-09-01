import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { TenantEditComponent } from './components/tenant-edit/tenant-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetFileNameDirective } from './directives/get-file-name.directive';
import { FileTypeValidatorDirective } from './directives/file-type-validator.directive';
import { DisplayBoatsComponent } from './components/display-boats/display-boats.component';


@NgModule({
  declarations: [
    TenantDetailComponent,
    TenantEditComponent,
    GetFileNameDirective,
    FileTypeValidatorDirective,
    DisplayBoatsComponent,
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
