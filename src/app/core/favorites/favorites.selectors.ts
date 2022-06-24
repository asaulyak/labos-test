import {createSelector} from '@ngrx/store';
import {selectPatientsFavoriteState} from '../core.state';

export const selectPatientsFavorite = createSelector(selectPatientsFavoriteState, state => state.favorites);

