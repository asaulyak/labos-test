import {createSelector} from '@ngrx/store';
import {selectFavoritesState} from '../core.state';
import {favoritesAdapter} from './favorites.reducer';

export const selectFavorites = favoritesAdapter.getSelectors(selectFavoritesState).selectAll;

export const selectFavoritesStatus = createSelector(selectFavoritesState, state => state.status);
