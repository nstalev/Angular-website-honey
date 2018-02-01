import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {MyOwnCustomMaterialModule} from './../../core/AngularMaterials/MyOwnCustomMaterial.module'
import { MainPagesComponents } from './index'


@NgModule({
    declarations: [
      ...MainPagesComponents
    ],
    imports: [
      CommonModule,
      MyOwnCustomMaterialModule,
      RouterModule
    ],
    exports: [
      ...MainPagesComponents
    ]
  })
  export class MainPagesModule {  }