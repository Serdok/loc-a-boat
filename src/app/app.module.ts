import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './components/owner/owner.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MapComponent } from './map/map.component';

import { TenantModule } from './tenant/tenant.module';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToggleNavbarDirective } from './directives/toggle-navbar.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PopupService } from './popup.service';



@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
    NavbarComponent,
    ToggleNavbarDirective,
    OwnerComponent,
    InscriptionComponent,
    MapComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TenantModule,
    LeafletModule,
  ],
  providers: [
    {provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['localhost', 9099] : undefined,},
    {provide: USE_FIRESTORE_EMULATOR, useValue: !environment.production ? ['localhost', 8080] : undefined,},
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
