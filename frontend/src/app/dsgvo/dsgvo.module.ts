import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsgvoRoutingModule } from './dsgvo-routing.module';
import { DsgvoComponent } from './dsgvo.component';


import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [DsgvoComponent, TitleComponent],
  imports: [
    CommonModule,
    DsgvoRoutingModule,
    MaterialModules,
    FlexLayoutModule,
  ]
})
export class DsgvoModule { }
