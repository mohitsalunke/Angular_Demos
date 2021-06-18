import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { Page404balanceComponent } from './page404balance/page404balance.component';

const routes: Routes = [
  {path:'',component:BalanceComponent,children:[
    {path:'casual',component:CasualComponent},
    {path:'earned',component:EarnedComponent},
    {path:'**',component:Page404balanceComponent},
    {path:'',redirectTo:'casual',pathMatch:'full'}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
