import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

import { NavModule } from '../shared/nav/nav.module'

import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NavModule,
    MaterialModules,
    FlexLayoutModule
  ]
})
export class LandingModule { }
