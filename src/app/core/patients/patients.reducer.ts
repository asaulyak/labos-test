import {PatientsState, PatientsRenderingStatus} from './patients.model';
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
  status: PatientsRenderingStatus.Idle
};

const reducer = createReducer(
  initialState,

  on(actionPatientsLoadPatients, state => ({...state, status: PatientsRenderingStatus.Loading})),

  on(actionPatientsLoadPatientsSuccess, (state, {patients, count}) => ({
    ...state,
    error: null,
    patients,
    count,
    status: PatientsRenderingStatus.Success
  })),

  on(actionPatientsLoadPatientsFailure, (state, {error}) => ({...state, error, status: PatientsRenderingStatus.Error}))
);

export function patientsReducer(state: PatientsState | undefined, action: Action) {
  return reducer(state, action);
}
