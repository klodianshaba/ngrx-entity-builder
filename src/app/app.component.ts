import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store';
import { booksEntity } from './store/entities';
import { booksDatasource } from './datasource/books-datasource';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {
  store = inject(Store<State>);
  totalBooks: Signal<number>;
  constructor() {
    this.totalBooks = this.store.selectSignal(booksEntity.selectors.count);
    this.loadBooks();
  }
  loadBooks() {
    this.store.dispatch(booksEntity.actions.setAll(booksDatasource));
  }
}
