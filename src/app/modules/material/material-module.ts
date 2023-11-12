import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


const materialComponents = [
  FormsModule,
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule {}