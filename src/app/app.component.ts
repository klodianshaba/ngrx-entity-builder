import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store';
import { authorsEntity, booksEntity } from './store/entities';
import { BookModel } from './models/book.model';
import { Observable } from 'rxjs';
import { booksDatasource } from './datasource/books-datasource';
import { authorsDatasource } from './datasource/authors-datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  totalBooks$: Observable<number>;
  totalAuthors$: Observable<number>;
  constructor(private store: Store<State>) {
    this.totalBooks$ = this.store.select(booksEntity.selectors.selectTotal);
    this.totalAuthors$ = this.store.select(authorsEntity.selectors.selectTotal);
    this.loadAuthors();
    this.loadBooks();
  }
  loadAuthors(): void {
    this.store.dispatch(
      authorsEntity.actions.setAll({ entities: authorsDatasource })
    );
  }
  loadBooks(): void {
    this.store.dispatch(
      booksEntity.actions.setAll({ entities: booksDatasource })
    );
  }
}
