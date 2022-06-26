import {createAction, props} from '@ngrx/store';
import {Patient} from '../../shared/models/patient.model';
import {HttpErrorResponse} from '@angular/common/http';

export const actionPatientsLoadPatients = createAction('[Patients] Load Patients');

export const actionPatientsLoadPatientsSuccess = createAction(
  '[Patients] Load Success',
  props<{patients: Patient[], count: number}>(),
);

export const actionPatientsLoadPatientsFailure = createAction(
  '[Patients] Load Failure',
  props<{error: Error | HttpErrorResponse}>(),
);
