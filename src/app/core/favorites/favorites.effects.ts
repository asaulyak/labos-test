import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {State} from '../settings/settings.model';
import {
  actionFavoritesAdd,
  actionFavoritesLoad,
  actionFavoritesLoadFailure,
  actionFavoritesLoadSuccess, actionFavoritesRemove
} from './favorites.actions';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {FavoritesService} from './favorites.service';
import {selectFavorites} from './favorites.selectors';

@Injectable()
export class FavoritesEffects {
  constructor(private actions$: Actions, private store: Store<State>, private favoritesService: FavoritesService) {
  }

  loadFavorites = createEffect(() =>
    this.actions$.pipe(
      ofType(actionFavoritesLoad),
      switchMap(() => {
          return this.favoritesService.getAll().pipe(
            map(response => {
                return actionFavoritesLoadSuccess({
                  count: response.count,
                  favorites: response.favorite
                });
              }
            ),
            catchError(error =>
              of(
                actionFavoritesLoadFailure({
                  error
                })
              )
            )
          );
        }
      )
    )
  );

  saveFavorites = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionFavoritesAdd, actionFavoritesRemove),

        withLatestFrom(this.store.pipe(select(selectFavorites))),
        switchMap(([, favorites]) => this.favoritesService.save(favorites))
      ),
    {dispatch: false}
  );
}
