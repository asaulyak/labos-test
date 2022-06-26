import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {selectFavorites, selectFavoritesStatus} from '../../../core/favorites/favorites.selectors';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/animations/route.animations';
import {actionFavoritesLoad, actionFavoritesRemove} from '../../../core/favorites/favorites.actions';
import {FavoritesAsyncReadyStatus} from '../../../core/favorites/favorites.model';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {Favorite, FavoriteType} from '../../../shared/models/favorite.model';

@Component({
  selector: 'st-favorite',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  columns = ['type', 'name', 'actions'];
  filterQueryChange$ = new BehaviorSubject<string>('');

  asyncReadyStatuses = FavoritesAsyncReadyStatus;

  favorites$: Observable<Favorite[]>;
  favoriteAsyncStatus$: Observable<FavoritesAsyncReadyStatus>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.defineSelectors();
  }

  onGetFavoritesClick() {
    this.store.dispatch(actionFavoritesLoad());
  }

  onFilterQueryChange(event: Event) {
    // @ts-ignore: value exists here
    this.filterQueryChange$.next(event.target.value);
  }

  onRemoveFromFavoritesClick(favorite: Favorite) {
    this.store.dispatch(actionFavoritesRemove({favorite}));
  }

  private defineSelectors() {
    this.favorites$ = combineLatest([
      this.store.select(selectFavorites),
      this.filterQueryChange$.pipe(debounceTime(200)),
    ]).pipe(
      map(([favorites, query]) => {
        if (!query) {
          return favorites;
        }

        const queryClean = query.toLowerCase();

        return favorites.filter(item => {
          if (item.entityType === FavoriteType.Patient) {
            // Assuming firstName is a string
            return (item.entity.firstName as string | undefined)?.toLowerCase().includes(queryClean);
          } else if (item.entityType === FavoriteType.Order) {
            return item.entity.orderName?.toLowerCase().includes(queryClean);
          }

          return false;
        });
      }),
    );

    this.favoriteAsyncStatus$ = this.store.select(selectFavoritesStatus);
  }
}
