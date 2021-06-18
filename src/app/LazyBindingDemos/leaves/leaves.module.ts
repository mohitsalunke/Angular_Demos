import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';

import { Page404leaveComponent } from './page404leave/page404leave.component';
import { ApplyComponent } from './apply/apply.component';


@NgModule({
  declarations: [LeavesComponent,ApplyComponent,Page404leaveComponent],
  imports: [
    CommonModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
