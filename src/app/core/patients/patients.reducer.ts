import {PatientsAsyncReadyStatus, PatientsState} from './patients.model';
import {Action, createReducer, on} from '@ngrx/store';
import {
  actionPatientsLoadPatients,
  actionPatientsLoadPatientsFailure,
  actionPatientsLoadPatientsSuccess
} from './patients.actions';

export const initialState: PatientsState = {
  patients: [],
  count: 0,
  error: null,
  status: PatientsAsyncReadyStatus.Idle
};

const reducer = createReducer(
  initialState,

  on(actionPatientsLoadPatients, state => ({...state, status: PatientsAsyncReadyStatus.Loading})),

  on(actionPatientsLoadPatientsSuccess, (state, {patients, count}) => ({
    ...state,
    error: null,
    patients,
    count,
    status: PatientsAsyncReadyStatus.Success
  })),

  on(actionPatientsLoadPatientsFailure, (state, {error}) => ({...state, error, status: PatientsAsyncReadyStatus.Error}))
);

export function patientsReducer(state: PatientsState | undefined, action: Action) {
  return reducer(state, action);
}
