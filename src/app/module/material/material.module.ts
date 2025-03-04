import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatDividerModule, 
    MatGridListModule
  ], 
  exports: [
    CommonModule, 
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatDividerModule, 
    MatGridListModule
  ]
})
export class MaterialModule { }
