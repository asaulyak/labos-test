import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/core.module';
import {Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {selectPatients, selectPatientsStatus} from '../../../core/patients/patients.selectors';
import {actionPatientsLoadPatients} from '../../../core/patients/patients.actions';
import {Patient} from '../../../shared/models/patient.model';
import {actionFavoritesAdd, actionFavoritesLoad} from '../../../core/favorites/favorites.actions';
import {Favorite, FavoriteType} from '../../../shared/models/favorite.model';
import {PatientsAsyncReadyStatus} from '../../../core/patients/patients.model';
import {Observable} from 'rxjs';
import {Dictionary} from '@ngrx/entity';
import {selectFavoritesEntities} from '../../../core/favorites/favorites.selectors';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  columns = ['name', 'code', 'age', 'active', 'actions'];
  asyncReadyStatuses = PatientsAsyncReadyStatus;

  patients$: Observable<Patient[]>;
  favoriteEntities$: Observable<Dictionary<Favorite>>;
  patientsRenderingStatus$: Observable<PatientsAsyncReadyStatus>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.defineSelectors();
  }

  onGetPatientsClick() {
    this.store.dispatch(actionPatientsLoadPatients());
    this.store.dispatch(actionFavoritesLoad());
  }

  onAddToFavoritesClick(patient: Patient) {
    this.store.dispatch(
      actionFavoritesAdd({
        favorite: {
          entityType: FavoriteType.Patient,
          entity: patient
        }
      })
    );
  }

  private defineSelectors() {
    this.patients$ = this.store.select(selectPatients);
    this.patientsRenderingStatus$ = this.store.select(selectPatientsStatus);
    this.favoriteEntities$ = this.store.select(selectFavoritesEntities);
  }
}
