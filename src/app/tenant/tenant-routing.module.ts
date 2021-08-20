import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { TenantEditComponent } from './components/tenant-edit/tenant-edit.component';

const routes: Routes = [
  { path: 'detail', component: TenantDetailComponent, },
  { path: 'edit', component: TenantEditComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule {
}
