import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KingsComponent } from './kings/kings.component';

const routes: Routes = [
  {path:'',component:KingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KingRoutingModule { }
