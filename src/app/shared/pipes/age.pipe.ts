import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';
import {OrDefaultPipe} from './or-default.pipe';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  constructor(private orDefaultPipe: OrDefaultPipe) {}

  transform(dob: string | undefined, format = 'dd-MM-yyyy'): string {
    if (!dob) {
      return this.orDefaultPipe.transform(dob);
    }

    const dobParsed = DateTime.fromFormat(dob, format);
    const today = DateTime.now();

    return `${Math.floor(today.diff(dobParsed, 'years').years)}`;
  }
}
