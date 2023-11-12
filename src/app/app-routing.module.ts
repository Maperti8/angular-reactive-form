import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  // eager loaded components
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent },
  // lazy loaded modules
  { path: 'form', loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }