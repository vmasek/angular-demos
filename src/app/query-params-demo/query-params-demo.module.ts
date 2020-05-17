import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CropImageModule } from '../pipes/crop-image/crop-image.module';
import { QueryParamsDemoComponent } from './query-params-demo.component';
import { QueryParamsDemoRoutingModule } from './query-params-demo.routing';

@NgModule({
  declarations: [QueryParamsDemoComponent],
  imports: [
    CommonModule,
    QueryParamsDemoRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CropImageModule,
  ],
})
export class QueryParamsDemoModule {}
