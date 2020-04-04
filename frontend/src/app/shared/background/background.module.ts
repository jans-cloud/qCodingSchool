import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    BackgroundComponent,
    MobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BackgroundComponent, MobileComponent],
})
export class BackgroundModule { }
