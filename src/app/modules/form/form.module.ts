import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { FormComponent } from './components/form/form.component';
import { FormRoutingModule } from './form-routing';
import { MaterialModule } from '../material/material-module';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule,
  ]
})
export class FormModule { }
