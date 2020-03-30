import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum.component';


import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [ImpressumComponent, TitleComponent],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    MaterialModules,
    FlexLayoutModule,
  ]
})
export class ImpressumModule { }
