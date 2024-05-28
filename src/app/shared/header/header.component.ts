import { Component, inject, input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { booksEntity } from '../../store/entities';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  back = input<boolean>(false);
  store = inject(Store<State>);
  totalBooks: Signal<number>;
  constructor() {
    this.totalBooks = this.store.selectSignal(booksEntity.selectors.count);
  }
}
