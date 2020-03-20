import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';

import { MaterialModules } from '../../material-modules';

import { SideNavModule } from '../shared/sidenav/sidenav.module';

@NgModule({
  declarations: [
    TenantsComponent,
  ],
  imports: [
    CommonModule,
    TenantsRoutingModule,
    MaterialModules,
    SideNavModule
  ]
})
export class TenantsModule { }
