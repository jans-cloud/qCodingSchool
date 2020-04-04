import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


import { MaterialModules } from '../material-modules';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './title/title.component';
import { LandingDesktopComponent } from './landing-desktop/landing-desktop.component';
import { LandingMobileComponent } from './landing-mobile/landing-mobile.component';

import { BackgroundModule } from '../shared/background/background.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  declarations: [
    LandingComponent,
    TitleComponent,
    LandingDesktopComponent,
    LandingMobileComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModules,
    FlexLayoutModule,
    BackgroundModule,
    FooterModule
  ]
})
export class LandingModule { }
