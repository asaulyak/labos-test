import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PatientResponse} from './patients.http.types';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<PatientResponse> {
    return this.http.get<PatientResponse>(`${environment.apiUrl}/51597ef3`);
  }
}
