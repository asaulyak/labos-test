import {PatientsAsyncReadyStatus, PatientsState} from './patients.model';
import {Action, createReducer, on} from '@ngrx/store';
import {
  actionPatientsLoadPatients,
  actionPatientsLoadPatientsFailure,
  actionPatientsLoadPatientsSuccess,
} from './patients.actions';
import {createEntityAdapter} from '@ngrx/entity';
import {Patient} from '../../shared/models/patient.model';

export const patientsAdapter = createEntityAdapter<Patient>({
  selectId: patient => patient.code, // Assuming code exists and is unique
});

export const initialState: PatientsState = {
  ids: [],
  entities: {},
  count: 0,
  error: null,
  status: PatientsAsyncReadyStatus.Idle,
};

const reducer = createReducer(
  initialState,

  on(actionPatientsLoadPatients, state => ({...state, status: PatientsAsyncReadyStatus.Loading})),

  on(actionPatientsLoadPatientsSuccess, (state, {patients, count}) =>
    patientsAdapter.setAll(patients, {
      ...state,
      error: null,
      count,
      status: PatientsAsyncReadyStatus.Success,
    }),
  ),

  on(actionPatientsLoadPatientsFailure, (state, {error}) => ({
    ...state,
    error,
    status: PatientsAsyncReadyStatus.Error,
  })),
);

export function patientsReducer(state: PatientsState | undefined, action: Action) {
  return reducer(state, action);
}
