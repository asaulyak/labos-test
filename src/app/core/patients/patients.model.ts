import {Patient} from '../../shared/models/patient.model';
import {HttpErrorResponse} from '@angular/common/http';
import {EntityState} from '@ngrx/entity';

export interface PatientsState extends EntityState<Patient>{
  count: number;
  error: Error | HttpErrorResponse | null;
  status: PatientsAsyncReadyStatus;
}

export enum PatientsAsyncReadyStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
