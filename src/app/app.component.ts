import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store';
import { booksEntity } from './store/entities';
import { booksDatasource } from './datasource/books-datasource';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {
  totalBooks: Signal<number | undefined>;
  constructor(private store: Store<State>) {
    this.totalBooks = toSignal(
      this.store.select(booksEntity.selectors.selectTotal)
    );
    this.loadBooks();
  }
  loadBooks() {
    this.store.dispatch(booksEntity.actions.setAll(booksDatasource));
  }
}
