import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {Order} from '../../shared/models/order.model';

export const actionOrdersLoad = createAction('[Orders] Load Orders');

export const actionOrdersLoadSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: Order[], count: number }>()
);

export const actionOrdersLoadFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: Error | HttpErrorResponse }>()
);
