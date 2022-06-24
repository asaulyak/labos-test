import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orDefault',
})
export class OrDefaultPipe implements PipeTransform {
  transform<T extends unknown>(value: T, defaultValue = '-'): T | string {
    if (value === '') {
      return defaultValue;
    }

    return value ?? defaultValue;
  }
}
