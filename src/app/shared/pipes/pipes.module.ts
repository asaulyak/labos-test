import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgePipe} from './age.pipe';
import {OrDefaultPipe} from './or-default.pipe';

@NgModule({
  declarations: [AgePipe, OrDefaultPipe],
  imports: [CommonModule],
  providers: [AgePipe, OrDefaultPipe],
  exports: [AgePipe, OrDefaultPipe],
})
export class PipesModule {}
