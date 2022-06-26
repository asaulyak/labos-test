import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import {SharedModule} from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { FavoritesEntityNamePipe } from './favorites/favorites-entity-name.pipe';


@NgModule({
  declarations: [FavoritesComponent, FavoritesEntityNamePipe],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class FavoritesModule { }
