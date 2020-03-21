import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav.component';
import { SettingsComponent } from './settings/settings.component';

import { MaterialModules } from '../../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SubjectsComponent } from './subjects/subjects.component';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';

@NgModule({
  declarations: [
    NavComponent,
    SettingsComponent,
    SubjectsComponent,
    BurgermenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModules,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [NavComponent],
})
export class NavModule { }
