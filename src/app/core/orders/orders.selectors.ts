import {createSelector} from '@ngrx/store';
import {selectOrdersState} from '../core.state';
import {ordersAdapter} from './orders.reducer';

export const selectOrders = ordersAdapter.getSelectors(selectOrdersState).selectAll;

export const selectOrdersStatus = createSelector(selectOrdersState, state => state.status);
