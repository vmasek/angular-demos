import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropImagePipe } from './crop-image.pipe';

@NgModule({
  declarations: [CropImagePipe],
  exports: [CropImagePipe],
  imports: [CommonModule],
})
export class CropImageModule {}
