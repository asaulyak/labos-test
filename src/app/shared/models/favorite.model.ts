import {Patient} from './patient.model';
import {Order} from './order.model';

interface FavoriteBase {
  id: string;
  entityType: FavoriteType;
  entity: Patient | Order;
}

interface FavoritePatient extends FavoriteBase {
  entityType: FavoriteType.Patient;
  entity: Patient;
}

interface FavoriteOrder extends FavoriteBase {
  entityType: FavoriteType.Order;
  entity: Order;
}

export type Favorite = FavoritePatient | FavoriteOrder;

export enum FavoriteType {
  Patient = 'patient',
  Order = 'order',
}
