import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {OrdersResponse} from './orders.http.types';

@Injectable({providedIn: 'root'})
export class OrdersService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(`${environment.apiUrl}/79fb05cb`);
  }
}
