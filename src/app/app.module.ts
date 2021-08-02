import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OwnerComponent } from './components/owner/owner.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OwnerComponent,
    InscriptionComponent,
    MapComponent,

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
