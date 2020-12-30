import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CropImageModule } from '../pipes/crop-image/crop-image.module';
import { RatingColorModule } from '../pipes/rating-color/rating-color.module';
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
    RatingColorModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class QueryParamsDemoModule {}
