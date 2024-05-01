import { Component } from '@angular/core';
import { booksEntity } from '../../store/entities';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { BookModel } from '../../models/book.model';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [NgForOf, AsyncPipe],
})
export class BooksComponent {
  books$: Observable<BookModel[]>;
  constructor(
    private store: Store<State>,
    private router: Router
  ) {
    this.books$ = this.store.select(booksEntity.selectors.selectAll);
  }
  onBook(book: BookModel) {
    this.router.navigate(['/book', book.id]).then();
  }
}
