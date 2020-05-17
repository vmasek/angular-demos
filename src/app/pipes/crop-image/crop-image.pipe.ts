import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropImage',
})
export class CropImagePipe implements PipeTransform {
  transform(value: string, width: number = 600, height: number = 400): string {
    return (
      value?.replace('/media/', `/media/crop/${width}/${height}/`) ||
      '/assets/placeholder.jpg'
    );
  }
}
