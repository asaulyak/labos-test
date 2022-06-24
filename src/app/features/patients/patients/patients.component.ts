import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/core.module';
import {Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {selectPatients, selectPatientsStatus} from '../../../core/patients/patients.selectors';
import {actionPatientsLoadPatients} from '../../../core/patients/patients.actions';
import {PatientsRenderingStatus} from '../../../core/patients/patients.model';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  columns = ['name', 'code', 'age', 'active'];
  patients$ = this.store.select(selectPatients);
  patientsRenderingStatus$ = this.store.select(selectPatientsStatus);
  patientsRenderingStatuses = PatientsRenderingStatus

  constructor(private store: Store<State>) {}

  ngOnInit() {
  }

  onGetPatientsClick() {
    this.store.dispatch(actionPatientsLoadPatients());

  }
}
