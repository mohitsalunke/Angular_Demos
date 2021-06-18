import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KingRoutingModule } from './king-routing.module';
import { KingsComponent } from './kings/kings.component';


@NgModule({
  declarations: [
    KingsComponent
  ],
  imports: [
    CommonModule,
    KingRoutingModule
  ]
})
export class KingModule { }
