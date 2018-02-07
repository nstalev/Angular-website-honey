import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main-pages/home/home.component';
import { ContactsComponent } from './components/main-pages/contacts/contacts.component';
import { AboutUsComponent } from './components/main-pages/about-us/about-us.component';
import { GalleryComponent } from './components/main-pages/gallery/gallery.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'contacts',    component: ContactsComponent },
  { path: 'aboutus',    component: AboutUsComponent },
  { path: 'gallery',    component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
