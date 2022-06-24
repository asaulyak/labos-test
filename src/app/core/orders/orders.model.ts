import {EntityState} from '@ngrx/entity';
import {Order} from '../../shared/models/order.model';
import {HttpErrorResponse} from '@angular/common/http';

export interface OrdersState extends EntityState<Order> {
  count: number;
  error: Error | HttpErrorResponse | null;
  status: OrdersAsyncReadyStatus;
}


export enum OrdersAsyncReadyStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
