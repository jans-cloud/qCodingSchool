import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav.component';

import { MaterialModules } from '../../../material-modules';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [SidenavComponent],
})
export class SideNavModule { }
