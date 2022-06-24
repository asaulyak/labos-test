import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {State} from '../settings/settings.model';
import {Store} from '@ngrx/store';
import {
  actionPatientsLoadPatients,
  actionPatientsLoadPatientsFailure,
  actionPatientsLoadPatientsSuccess,
} from './patients.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PatientsService} from './patients.service';
import {of} from 'rxjs';

@Injectable()
export class PatientsEffects {
  constructor(private actions$: Actions, private store: Store<State>, private patientsService: PatientsService) {}

  loadPatients = createEffect(() =>
    this.actions$.pipe(
      ofType(actionPatientsLoadPatients),

      switchMap(() =>
        this.patientsService.getPatients().pipe(
          map(response => actionPatientsLoadPatientsSuccess({count: response.count, patients: response.patient})),
          catchError(error =>
            of(
              actionPatientsLoadPatientsFailure({
                error,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
