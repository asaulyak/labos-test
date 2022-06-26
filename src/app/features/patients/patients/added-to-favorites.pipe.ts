import {Pipe, PipeTransform} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import {Favorite, FavoriteType} from '../../../shared/models/favorite.model';
import {composeFavoriteId} from '../../../core/favorites/favorites.reducer';
import {Patient} from '../../../shared/models/patient.model';

@Pipe({
  name: 'addedToFavorites'
})
export class AddedToFavoritesPipe implements PipeTransform {
  transform(entities: Dictionary<Favorite>, patient: Patient): boolean {
    const id = composeFavoriteId({
      entityType: FavoriteType.Patient,
      entity: patient
    });

    return !!entities[id];
  }
}
