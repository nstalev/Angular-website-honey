import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


import { MainPagesComponents } from './index'


@NgModule({
    declarations: [
      ...MainPagesComponents
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
      ...MainPagesComponents
    ]
  })
  export class MainPagesModule {  }