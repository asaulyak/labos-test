import {Patient} from '../../shared/models/patient.model';
import {HttpErrorResponse} from '@angular/common/http';

export interface PatientsState {
  patients: Patient[];
  count: number;
  error: Error | HttpErrorResponse | null;
  status: PatientsRenderingStatus;
}

export enum PatientsRenderingStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
  Idle = 'idle',
}
