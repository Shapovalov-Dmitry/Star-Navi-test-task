import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalcase'
})
export class NormalCasePipe implements PipeTransform {
  transform(value: string): string {
    const separator = ' ';
    value = value
      .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
      .toLowerCase();
    const firstLetter = value[0];
    return value.replace(firstLetter, firstLetter.toUpperCase());
  }
}
