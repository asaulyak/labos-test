import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/core.module';
import {Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {selectPatients, selectPatientsStatus} from '../../../core/patients/patients.selectors';
import {actionPatientsLoadPatients} from '../../../core/patients/patients.actions';
import {Patient} from '../../../shared/models/patient.model';
import {actionFavoritesAdd} from '../../../core/favorites/favorites.actions';
import {FavoriteType} from '../../../shared/models/favorite.model';
import {PatientsAsyncReadyStatus} from '../../../core/patients/patients.model';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  columns = ['name', 'code', 'age', 'active', 'actions'];
  asyncReadyStatuses = PatientsAsyncReadyStatus;

  patients$ = this.store.select(selectPatients);
  patientsRenderingStatus$ = this.store.select(selectPatientsStatus);

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onGetPatientsClick() {
    this.store.dispatch(actionPatientsLoadPatients());
  }

  onAddToFavoritesClick(patient: Patient) {
    this.store.dispatch(
      actionFavoritesAdd({
        favorite: {
          entityType: FavoriteType.Patient,
          entity: patient,
        },
      }),
    );
  }
}
