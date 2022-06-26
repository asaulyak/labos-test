import {createSelector} from '@ngrx/store';
import {selectPatientsState} from '../core.state';
import {patientsAdapter} from './patients.reducer';

export const selectPatients = patientsAdapter.getSelectors(selectPatientsState).selectAll;

export const selectPatientsStatus = createSelector(selectPatientsState, state => state.status);
