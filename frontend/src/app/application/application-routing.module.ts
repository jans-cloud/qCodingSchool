import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '', component: ApplicationComponent, children: [
      { path: '', component: ApplicationComponent },
      { path: 'objects', loadChildren: () => import('./objects/objects.module').then(m => m.ObjectsModule) },
      { path: 'tenants', loadChildren: () => import('./tenants/tenants.module').then(m => m.TenantsModule) },
      { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
      { path: 'login', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./login/register/register.module').then(m => m.RegisterModule) },
      { path: '', component: ApplicationComponent, pathMatch: 'full' },
      { path: '**', component: ApplicationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
