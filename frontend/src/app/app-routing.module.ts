import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule) },
  { path: 'teaching', loadChildren: () => import('./teaching/teaching.module').then(m => m.TeachingModule) },
  { path: 'enterprise', loadChildren: () => import('./enterprise/enterprise.module').then(m => m.EnterpriseModule) },
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
