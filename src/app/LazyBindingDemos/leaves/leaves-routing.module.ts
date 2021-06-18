import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';

import { LeavesComponent } from './leaves.component';
import { Page404leaveComponent } from './page404leave/page404leave.component';

const routes: Routes = [
  {path:'',component:LeavesComponent,children:[
    {path:'apply',component:ApplyComponent},{path:'balance',loadChildren:()=>import('../leaves/balance/balance.module').then(m=>m.BalanceModule)},
    {path:'',redirectTo:'apply',pathMatch:'full'},
    {path:'**',component:Page404leaveComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
