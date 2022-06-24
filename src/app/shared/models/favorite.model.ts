import {Patient} from './patient.model';
import {Order} from './order.model';

interface FavoriteBase {
  id: string;
  type: FavoriteType;
}

interface FavoritePatient extends FavoriteBase {
  type: FavoriteType.Patient;
  data: Patient;
}

interface FavoriteOrder extends FavoriteBase {
  type: FavoriteType.Order;
  data: Order;
}

export type Favorite = FavoritePatient | FavoriteOrder;

export enum FavoriteType {
  Patient = 'patient',
  Order = 'order',
}
