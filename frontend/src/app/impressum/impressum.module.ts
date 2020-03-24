import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum.component';


import { NavModule } from '../shared/nav/nav.module';
import { FooterModule } from '../shared/footer/footer.module'

import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ImpressumComponent],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    NavModule,
    MaterialModules,
    FlexLayoutModule,
    FooterModule
  ]
})
export class ImpressumModule { }
