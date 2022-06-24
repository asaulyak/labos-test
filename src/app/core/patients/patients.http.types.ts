import {Patient} from '../../shared/models/patient.model';

export interface PatientResponse {
  count: number;
  patient: Patient[];
}
