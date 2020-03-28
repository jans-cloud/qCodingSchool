import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';



import { MaterialModules } from '../../material-modules';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MaterialModules,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [FooterComponent],
})
export class FooterModule { }
