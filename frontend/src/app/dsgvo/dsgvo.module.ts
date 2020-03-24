import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsgvoRoutingModule } from './dsgvo-routing.module';
import { DsgvoComponent } from './dsgvo.component';


import { NavModule } from '../shared/nav/nav.module';
import { FooterModule } from '../shared/footer/footer.module'

import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DsgvoComponent],
  imports: [
    CommonModule,
    DsgvoRoutingModule,
    NavModule,
    MaterialModules,
    FlexLayoutModule,
    FooterModule
  ]
})
export class DsgvoModule { }
