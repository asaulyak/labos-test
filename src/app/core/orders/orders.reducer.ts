import {createEntityAdapter} from '@ngrx/entity';
import {Order} from '../../shared/models/order.model';
import {OrdersAsyncReadyStatus, OrdersState} from './orders.model';
import {Action, createReducer, on} from '@ngrx/store';
import {actionOrdersLoad, actionOrdersLoadFailure, actionOrdersLoadSuccess} from './orders.actions';

export const ordersAdapter = createEntityAdapter<Order>({
  selectId: order => order.identifier, // Assume identifier exists and is unique
});

export const initialState = ordersAdapter.getInitialState<OrdersState>({
  error: null,
  status: OrdersAsyncReadyStatus.Idle,
  count: 0,
  ids: [],
  entities: {},
});

const reducer = createReducer(
  initialState,

  on(actionOrdersLoad, state => ({...state, status: OrdersAsyncReadyStatus.Loading})),
  on(actionOrdersLoadSuccess, (state, {orders, count}) =>
    ordersAdapter.setAll(orders, {
      ...state,
      status: OrdersAsyncReadyStatus.Success,
      count,
      error: null,
    }),
  ),
  on(actionOrdersLoadFailure, (state, {error}) => ({...state, error, status: OrdersAsyncReadyStatus.Error})),
);

export function ordersReducer(state: OrdersState | undefined, action: Action) {
  return reducer(state, action);
}
