import {Pipe, PipeTransform} from '@angular/core';
import {Favorite, FavoriteType} from '../../../shared/models/favorite.model';
import {OrDefaultPipe} from '../../../shared/pipes/or-default.pipe';

@Pipe({
  name: 'favoritesEntityName',
})
export class FavoritesEntityNamePipe implements PipeTransform {
  constructor(private orDefaultPipe: OrDefaultPipe) {}

  transform(value: Favorite): string {
    let name = '';

    if (value.entityType === FavoriteType.Patient) {
      name = value.entity.fullName;
    } else if (value.entityType === FavoriteType.Order) {
      name = value.entity.orderName;
    }

    return this.orDefaultPipe.transform(name);
  }
}
