import {Action, createReducer} from '@ngrx/store';
import {FavoritesState} from './favorites.model';

export const initialState: FavoritesState = {
  favorites: []
};

const reducer = createReducer(
  initialState
);

export function favoritesReducer(state: FavoritesState | undefined, action: Action) {
  return reducer(state, action);
}
