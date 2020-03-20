import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: RegisterComponent, children: [
    { path: 'confirm', component: ConfirmComponent },
    { path: 'form', component: FormComponent },
    { path: '**', component: FormComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
