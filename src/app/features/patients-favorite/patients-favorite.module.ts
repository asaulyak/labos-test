import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsFavoriteRoutingModule } from './patients-favorite-routing.module';
import { PatientsFavoriteComponent } from './patients-favorite/patients-favorite.component';
import {SharedModule} from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [PatientsFavoriteComponent],
  imports: [
    CommonModule,
    PatientsFavoriteRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class PatientsFavoriteModule { }
