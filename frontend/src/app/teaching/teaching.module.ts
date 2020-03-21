import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachingRoutingModule } from './teaching-routing.module';
import { TeachingComponent } from './teaching.component';

import { NavModule } from '../shared/nav/nav.module';

@NgModule({
  declarations: [TeachingComponent],
  imports: [
    CommonModule,
    TeachingRoutingModule,
    NavModule
  ]
})
export class TeachingModule { }
