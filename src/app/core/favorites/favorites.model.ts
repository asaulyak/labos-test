import {Favorite} from '../../shared/models/favorite.model';
import {HttpErrorResponse} from '@angular/common/http';
import {EntityState} from '@ngrx/entity';

export interface FavoritesState extends EntityState<Favorite> {
  count: number;
  status: FavoritesAsyncReadyStatus;
  error: Error | HttpErrorResponse | null;
}

export enum FavoritesAsyncReadyStatus { // TODO: Move to common
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
