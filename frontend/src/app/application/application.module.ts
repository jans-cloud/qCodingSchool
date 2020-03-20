import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';

import { MaterialModules } from '../material-modules';

import { NavModule } from '../shared/nav/nav.module'

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ApplicationComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MaterialModules,
    NavModule,
    FlexLayoutModule
  ]
})
export class ApplicationModule { }
