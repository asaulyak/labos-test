import {createAction, props} from '@ngrx/store';
import {Favorite} from '../../shared/models/favorite.model';
import {HttpErrorResponse} from '@angular/common/http';

export const actionFavoritesLoad = createAction('[Favorites] Load');

export const actionFavoritesLoadSuccess = createAction(
  '[Favorites] Load Success',
  props<{favorites: Favorite[]; count: number}>(),
);

export const actionFavoritesLoadFailure = createAction(
  '[Favorites] Load Failure',
  props<{error: Error | HttpErrorResponse}>(),
);

export const actionFavoritesAdd = createAction(
  '[Favorites] Add',
  props<{favorite: Pick<Favorite, 'entityType' | 'entity'>}>(),
);

export const actionFavoritesRemove = createAction('[Favorites] Remove', props<{favorite: Favorite}>());
