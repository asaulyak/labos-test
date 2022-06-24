import {createSelector} from '@ngrx/store';
import {selectPatientsState} from '../core.state';

export const selectPatients = createSelector(selectPatientsState, state => state.patients);

export const selectPatientsStatus = createSelector(selectPatientsState, state => state.status);
