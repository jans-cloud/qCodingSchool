import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsgvoRoutingModule } from './dsgvo-routing.module';
import { DsgvoComponent } from './dsgvo.component';


import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './title/title.component';

import { BackgroundModule } from '../shared/background/background.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  declarations: [DsgvoComponent, TitleComponent],
  imports: [
    CommonModule,
    DsgvoRoutingModule,
    MaterialModules,
    FlexLayoutModule,
    BackgroundModule,
    FooterModule
  ]
})
export class DsgvoModule { }
