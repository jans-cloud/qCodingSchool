import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectsComponent } from './objects.component';

const routes: Routes = [{ path: '', component: ObjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
