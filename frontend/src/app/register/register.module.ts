import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModules } from '../material-modules';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormComponent } from './form/form.component';

import { BackgroundModule } from '../shared/background/background.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  declarations: [
    RegisterComponent,
    ConfirmComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModules,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BackgroundModule,
    FooterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterModule { }
