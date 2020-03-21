import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseComponent } from './enterprise.component';


import { NavModule } from '../shared/nav/nav.module'

@NgModule({
  declarations: [EnterpriseComponent],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    NavModule
  ]
})
export class EnterpriseModule { }
