import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store';
import { authorsEntity, booksEntity } from './store/entities';
import { booksDatasource } from './datasource/books-datasource';
import { authorsDatasource } from './datasource/authors-datasource';
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
  totalAuthors: Signal<number | undefined>;
  constructor(private store: Store<State>) {
    this.totalBooks = toSignal(
      this.store.select(booksEntity.selectors.selectTotal)
    );
    this.totalAuthors = toSignal(
      this.store.select(authorsEntity.selectors.selectTotal)
    );
    this.loadAuthors();
    this.loadBooks();
  }
  loadAuthors() {
    this.store.dispatch(
      authorsEntity.actions.setAll({ entities: authorsDatasource })
    );
  }
  loadBooks() {
    this.store.dispatch(
      booksEntity.actions.setAll({ entities: booksDatasource })
    );
  }
}
