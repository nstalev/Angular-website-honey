import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module'

import { AppComponent } from './app.component';

import { HomeComponent } from './components/main-pages/home/home.component';
import { ContactsComponent } from './components/main-pages/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
