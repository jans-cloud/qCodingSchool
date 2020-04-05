import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './shared/footer/footer.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavModule } from './shared/nav/nav.module';

import { MaterialModules } from './material-modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModules,
    HttpClientModule,
    FooterModule,
    NavModule,
  ],
  exports: [
    MaterialModules,
    BrowserModule,
    FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
