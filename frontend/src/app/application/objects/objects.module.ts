import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectsRoutingModule } from './objects-routing.module';
import { ObjectsComponent } from './objects.component';

import { MaterialModules } from '../../material-modules';

import { SideNavModule } from '../shared/sidenav/sidenav.module';

@NgModule({
  declarations: [
    ObjectsComponent,
  ],
  imports: [
    CommonModule,
    ObjectsRoutingModule,
    MaterialModules,
    SideNavModule
  ]
})
export class ObjectsModule { }
