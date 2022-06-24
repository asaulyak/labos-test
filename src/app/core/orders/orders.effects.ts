import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {State} from '../settings/settings.model';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {OrdersService} from './orders.service';
import {actionOrdersLoad, actionOrdersLoadFailure, actionOrdersLoadSuccess} from './orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(private actions$: Actions, private store: Store<State>, private ordersService: OrdersService) {}

  loadOrders = createEffect(() =>
    this.actions$.pipe(
      ofType(actionOrdersLoad),

      switchMap(() =>
        this.ordersService.getAll().pipe(
          map(response => actionOrdersLoadSuccess({count: response.count, orders: response.order})),
          catchError(error =>
            of(
              actionOrdersLoadFailure({
                error,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
