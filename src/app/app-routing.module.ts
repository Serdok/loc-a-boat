import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './components/first-page/first-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';
import { MapComponent } from './map/map.component';

const redirectAnonymousToFirstPage = () => redirectUnauthorizedTo(['first-page']);
const redirectLoggedInToLandingPage = () => redirectLoggedInTo(['landing-page']);

const routes: Routes = [
  {path: 'first-page', component: FirstPageComponent, ...canActivate(redirectLoggedInToLandingPage)},
  {path: 'signup', component: SignupComponent, ...canActivate(redirectLoggedInToLandingPage)},
  {path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToLandingPage)},
  {path: 'landing-page', component: LandingPageComponent, ...canActivate(redirectAnonymousToFirstPage)},
  {
    path: 'tenant', loadChildren: () => import('./tenant/tenant.module').then(module => module.TenantModule),
    canLoad: [AuthGuard], ...canActivate(redirectAnonymousToFirstPage)
  },
  {path: 'stations', component: MapComponent, ...canActivate(redirectAnonymousToFirstPage)},
  {path: '', redirectTo: '/first-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{enableTracing: !environment.production}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
