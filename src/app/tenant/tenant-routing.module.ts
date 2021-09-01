import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { TenantEditComponent } from './components/tenant-edit/tenant-edit.component';
import { DisplayBoatsComponent } from './components/display-boats/display-boats.component';

const routes: Routes = [
  {path: 'detail', component: TenantDetailComponent,},
  {path: 'edit', component: TenantEditComponent,},
  {path: 'boats', component: DisplayBoatsComponent,},
  {path: '', redirectTo: 'boats', pathMatch: 'full',},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule {
}
