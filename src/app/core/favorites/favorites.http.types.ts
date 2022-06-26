import {Favorite} from '../../shared/models/favorite.model';

export interface FavoritesResponse {
  count: number;
  favorite: Favorite[];
}
