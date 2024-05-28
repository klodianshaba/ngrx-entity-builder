import { Component, inject, Signal } from '@angular/core';
import { booksEntity } from '../../store/entities';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { BookModel } from '../../models/book.model';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [
    MatButton,
    MatRipple,
    NgClass,
    MatIconButton,
    MatIcon,
    RouterLink,
    HeaderComponent,
  ],
})
export class BooksComponent {
  store = inject(Store<State>);
  books: Signal<BookModel[]>;
  constructor() {
    this.books = this.store.selectSignal(booksEntity.selectors.all);
  }
  updateOne(book: BookModel) {
    const randomBook = this.getRandomBook();
    this.store.dispatch(
      booksEntity.actions.updateOne({
        id: book.id,
        changes: { title: randomBook.title, year: randomBook.year },
      })
    );
  }
  removeOne(book: BookModel) {
    this.store.dispatch(booksEntity.actions.removeOne(book.id));
  }
  addOne() {
    const book = this.getRandomBook();
    this.store.dispatch(booksEntity.actions.addOne(book));
  }
  getRandomBook(): BookModel {
    const id = Date.now();
    const title = Math.random().toString(16).slice(8);
    const year =
      Math.floor(Math.random() * (new Date().getFullYear() - 2000)) + 2000;
    return {
      id,
      title: title,
      authorId: 1,
      year: year,
      pages: 200,
      rating: 3.5,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    };
  }
}
