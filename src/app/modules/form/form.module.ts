import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { FormComponent } from './components/form/form.component';
import { FormRoutingModule } from './form-routing';
import { MaterialModule } from '../material/material-module';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [FormComponent, ModalComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule,
  ]
})
export class FormModule { }
