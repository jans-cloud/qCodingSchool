import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    LandingComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModules,
    FlexLayoutModule,
  ]
})
export class LandingModule { }
