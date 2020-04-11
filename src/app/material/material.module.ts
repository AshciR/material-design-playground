import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule } from '@angular/material'

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
