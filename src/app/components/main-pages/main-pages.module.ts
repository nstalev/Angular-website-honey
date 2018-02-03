import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxCarouselModule } from 'ngx-carousel';


import 'hammerjs';

import {MyOwnCustomMaterialModule} from './../../core/AngularMaterials/MyOwnCustomMaterial.module'
import { MainPagesComponents } from './index';
import { GalleryComponent } from './gallery/gallery.component'


@NgModule({
    declarations: [
      ...MainPagesComponents,
      GalleryComponent
    ],
    imports: [
      CommonModule,
      MyOwnCustomMaterialModule,
      RouterModule,
      NgxCarouselModule
    ],
    exports: [
      ...MainPagesComponents
    ]
  })
  export class MainPagesModule {  }