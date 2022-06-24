import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {selectPatientsFavorite} from '../../../core/favorites/favorites.selectors';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/animations/route.animations';

@Component({
  selector: 'st-patients-favorite',
  templateUrl: './patients-favorite.component.html',
  styleUrls: ['./patients-favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsFavoriteComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  patientsFavorite$ = this.store.select(selectPatientsFavorite);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
