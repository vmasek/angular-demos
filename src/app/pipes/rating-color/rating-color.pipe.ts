import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingColor',
})
export class RatingColorPipe implements PipeTransform {
  transform(rawValue: number): string {
    if (!rawValue) {
      return 'hsl(0, 0%, 60%)';
    }

    const value = rawValue > 1 ? rawValue / 100 : rawValue;
    const hue = (value * 120).toString(10);
    return ['hsl(', hue, ',100%,50%)'].join('');
  }
}
