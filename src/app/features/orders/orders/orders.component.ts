import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/core.module';
import {Store} from '@ngrx/store';
import {selectOrders, selectOrdersStatus} from '../../../core/orders/orders.selectors';
import {actionOrdersLoad} from '../../../core/orders/orders.actions';
import {OrdersAsyncReadyStatus} from '../../../core/orders/orders.model';

@Component({
  selector: 'st-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  columns = ['id', 'orderName', 'orderNum', 'patient', 'actions'];
  asyncReadyStatuses = OrdersAsyncReadyStatus;

  orders$ = this.store.select(selectOrders);
  ordersAsyncStatus$ = this.store.select(selectOrdersStatus); // TODO: Merge selectors or not

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.orders$.subscribe(orders => {
      console.log('orders', orders);
    })
  }

  onGetOrdersClick() {
    this.store.dispatch(actionOrdersLoad());
  }
}
