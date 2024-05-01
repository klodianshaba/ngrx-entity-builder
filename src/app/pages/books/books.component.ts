import { Component, Signal } from '@angular/core';
import { booksEntity } from '../../store/entities';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { BookModel } from '../../models/book.model';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class BooksComponent {
  books: Signal<BookModel[] | undefined>;
  constructor(
    private store: Store<State>,
    private router: Router
  ) {
    this.books = toSignal(this.store.select(booksEntity.selectors.selectAll));
  }
  onBook(book: BookModel) {
    this.router.navigate(['/book', book.id]).then();
  }
  onDelete(event: Event, book: BookModel) {
    event.stopPropagation();
    this.store.dispatch(booksEntity.actions.removeOne({ id: book.id }));
  }
}
