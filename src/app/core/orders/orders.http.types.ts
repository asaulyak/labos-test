import {Order} from '../../shared/models/order.model';

export interface OrdersResponse {
  count: number;
  order: Order[];
}
