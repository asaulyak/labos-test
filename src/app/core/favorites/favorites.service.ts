import {Injectable} from '@angular/core';
import {Favorite} from '../../shared/models/favorite.model';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {Observable, of, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {FavoritesResponse} from './favorites.http.types';

const FAVORITES_PREFIX = 'FAVORITES_STORAGE';

@Injectable({providedIn: 'root'})
export class FavoritesService {
  constructor(private localStorageService: LocalStorageService) {}

  save(favorites: Favorite[]): Observable<FavoritesResponse> {
    this.localStorageService.setItem(FAVORITES_PREFIX, {favorites});

    // Simulate API response
    return of({
      count: favorites.length,
      favorite: favorites,
    });
  }

  getAll(): Observable<FavoritesResponse> {
    try {
      const data = this.localStorageService.getItem(FAVORITES_PREFIX);

      return of({
        count: data.favorites.length,
        favorite: data.favorites,
      });
    } catch (e: unknown) {
      return throwError(
        new HttpErrorResponse({
          error: 'Failed to load favorites',
        }),
      );
    }
  }
}
