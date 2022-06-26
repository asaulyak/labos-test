import {Action, createReducer, on} from '@ngrx/store';
import {FavoritesAsyncReadyStatus, FavoritesState} from './favorites.model';
import {createEntityAdapter} from '@ngrx/entity';
import {
  actionFavoritesAdd,
  actionFavoritesLoadFailure,
  actionFavoritesLoadSuccess,
  actionFavoritesRemove,
} from './favorites.actions';
import {Favorite, FavoriteType} from '../../shared/models/favorite.model';
import {Order} from '../../shared/models/order.model';
import {Patient} from '../../shared/models/patient.model';

export const favoritesAdapter = createEntityAdapter<Favorite>();

export const initialState: FavoritesState = {
  ids: [],
  entities: {},
  status: FavoritesAsyncReadyStatus.Idle,
  count: 0,
  error: null,
};

const composeId = (data: Pick<Favorite, 'entityType' | 'entity'>) => {
  let entityId = '';

  if (data.entityType === FavoriteType.Patient) {
    entityId = `${(data.entity as Patient).code}`;
  } else if (data.entityType === FavoriteType.Order) {
    entityId = (data.entity as Order).identifier;
  }

  return `${data.entityType}|${entityId}`;
};

const reducer = createReducer(
  initialState,

  on(actionFavoritesLoadSuccess, (state, {favorites, count}) =>
    favoritesAdapter.setAll(favorites, {
      ...state,
      count,
      error: null,
      status: FavoritesAsyncReadyStatus.Success,
    }),
  ),
  on(actionFavoritesLoadFailure, (state, {error}) => ({...state, error, status: FavoritesAsyncReadyStatus.Error})),
  on(actionFavoritesAdd, (state, {favorite}) => favoritesAdapter.addOne({id: composeId(favorite), ...favorite}, state)),
  on(actionFavoritesRemove, (state, {favorite}) => favoritesAdapter.removeOne(favorite.id, state)),
);

export function favoritesReducer(state: FavoritesState | undefined, action: Action) {
  return reducer(state, action);
}
