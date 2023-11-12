import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
