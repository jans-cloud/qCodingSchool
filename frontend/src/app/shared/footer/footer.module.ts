import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';



import { MaterialModules } from '../../material-modules';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MaterialModules,
    FlexLayoutModule
  ],
  exports: [FooterComponent],
})
export class FooterModule { }
