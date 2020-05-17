import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingColorPipe } from './rating-color.pipe';

@NgModule({
  declarations: [RatingColorPipe],
  exports: [RatingColorPipe],
  imports: [CommonModule],
})
export class RatingColorModule {}
