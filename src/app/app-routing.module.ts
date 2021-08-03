import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {path: 'tenant', loadChildren: () => import('./tenant/tenant.module').then(module => module.TenantModule),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production,})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
