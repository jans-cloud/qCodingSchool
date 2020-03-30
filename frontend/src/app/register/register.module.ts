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
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterModule { }
