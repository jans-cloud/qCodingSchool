import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';

import { MaterialModules } from '../../material-modules';


import { SideNavModule } from '../shared/sidenav/sidenav.module';

@NgModule({
  declarations: [
    AdministrationComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MaterialModules,
    SideNavModule
  ]
})
export class AdministrationModule { }
