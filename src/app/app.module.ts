import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module'
import { MainPagesModule } from './components/main-pages/main-pages.module'
import { MyOwnCustomMaterialModule } from './core/AngularMaterials/MyOwnCustomMaterial.module'

import { AppComponent } from './app.component';

import { HomeComponent } from './components/main-pages/home/home.component';
import { ContactsComponent } from './components/main-pages/contacts/contacts.component';
import { AboutUsComponent } from './components/main-pages/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyOwnCustomMaterialModule,
    SharedModule,
    MainPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
