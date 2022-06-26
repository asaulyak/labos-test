import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/core.module';
import {Store} from '@ngrx/store';
import {selectOrders, selectOrdersStatus} from '../../../core/orders/orders.selectors';
import {actionOrdersLoad} from '../../../core/orders/orders.actions';
import {OrdersAsyncReadyStatus} from '../../../core/orders/orders.model';
import {Order} from '../../../shared/models/order.model';
import {actionFavoritesAdd, actionFavoritesLoad} from '../../../core/favorites/favorites.actions';
import {Favorite, FavoriteType} from '../../../shared/models/favorite.model';
import {Observable} from 'rxjs';
import {selectFavoritesEntities} from '../../../core/favorites/favorites.selectors';
import {Dictionary} from '@ngrx/entity';

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

  orders$: Observable<Order[]>;
  ordersAsyncStatus$: Observable<OrdersAsyncReadyStatus>;
  favoriteEntities$: Observable<Dictionary<Favorite>>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.orders$ = this.store.select(selectOrders);
    this.ordersAsyncStatus$ = this.store.select(selectOrdersStatus); // TODO: Merge selectors or not
    this.favoriteEntities$ = this.store.select(selectFavoritesEntities);
  }

  onGetOrdersClick() {
    this.store.dispatch(actionOrdersLoad());
    this.store.dispatch(actionFavoritesLoad());
  }

  onAddToFavoritesClick(order: Order) {
    this.store.dispatch(
      actionFavoritesAdd({
        favorite: {
          entityType: FavoriteType.Order,
          entity: order,
        },
      }),
    );
  }
}
