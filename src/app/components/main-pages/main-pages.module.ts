import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxCarouselModule } from 'ngx-carousel';


import 'hammerjs';

import {MyOwnCustomMaterialModule} from './../../core/AngularMaterials/MyOwnCustomMaterial.module'
import { MainPagesComponents } from './index'


@NgModule({
    declarations: [
      ...MainPagesComponents
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