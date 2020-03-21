import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';

import { NavModule } from '../shared/nav/nav.module';

@NgModule({
  declarations: [LearningComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    NavModule
  ]
})
export class LearningModule { }
