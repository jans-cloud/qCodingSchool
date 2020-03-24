import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DsgvoComponent } from './dsgvo.component';

const routes: Routes = [{ path: '', component: DsgvoComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsgvoRoutingModule { }
