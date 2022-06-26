import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'st-favorites-button',
  templateUrl: './favorites-button.component.html',
  styleUrls: ['./favorites-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesButtonComponent implements OnInit {
  @Input() added: boolean;

  @Output() addToFavorites = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
