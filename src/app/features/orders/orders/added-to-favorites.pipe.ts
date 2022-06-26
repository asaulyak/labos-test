import {Pipe, PipeTransform} from '@angular/core';
import {Order} from '../../../shared/models/order.model';
import {composeFavoriteId} from '../../../core/favorites/favorites.reducer';
import {Favorite, FavoriteType} from '../../../shared/models/favorite.model';
import {Dictionary} from '@ngrx/entity';

@Pipe({
  name: 'addedToFavorites',
})
export class AddedToFavoritesPipe implements PipeTransform {
  transform(entities: Dictionary<Favorite>, order: Order): boolean {
    const id =  composeFavoriteId({
      entityType: FavoriteType.Order,
      entity: order,
    });

    return !!entities[id];
  }
}
