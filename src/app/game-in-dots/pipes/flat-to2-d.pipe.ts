import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatTo2D'
})
export class FlatTo2DPipe implements PipeTransform {
  transform<d>(arr: d[]): d[] | d[][] {
    const sideLength = Math.sqrt(arr.length);
    const isSquare = !(sideLength % 1);
    return isSquare
      ? arr.reduce(
          (acc, el, index) => {
            acc[Math.ceil((index + 1) % sideLength)].push(el);
            return acc;
          },
          Array.from({ length: sideLength }, a => [])
        )
      : arr;
  }
}
