import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { MaterialModule } from '../material/material-module';
import { FormComponent } from './components/form/form.component';
import { FormRoutingModule } from './form-routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule,
    FormComponent
  ]
})
export class FormModule { }
