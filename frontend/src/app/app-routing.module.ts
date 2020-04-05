import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'impressum', loadChildren: () => import('./impressum/impressum.module').then(m => m.ImpressumModule) },
  { path: 'dsgvo', loadChildren: () => import('./dsgvo/dsgvo.module').then(m => m.DsgvoModule) },
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
