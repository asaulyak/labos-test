import {createAction, props} from '@ngrx/store';
import {Order} from '../../shared/models/order.model';
import {Patient} from '../../shared/models/patient.model';

export const actionPatientsFavoriteAdd = createAction('[Patients Favorite] Add', props<Patient | Order>());

export const actionPatientsFavoriteRemove = createAction('[Patients Favorite] Remove', props<Patient | Order>());
