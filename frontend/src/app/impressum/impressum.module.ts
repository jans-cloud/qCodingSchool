import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum.component';


import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './title/title.component';

import { FooterModule } from '../shared/footer/footer.module';
import { BackgroundModule } from '../shared/background/background.module';

@NgModule({
  declarations: [ImpressumComponent, TitleComponent],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    MaterialModules,
    FlexLayoutModule,
    BackgroundModule,
    FooterModule
  ]
})
export class ImpressumModule { }
