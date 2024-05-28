import { Component, computed, input, Signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { BookModel } from '../../models/book.model';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { booksEntity } from '../../store/entities';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [HeaderComponent, MatIcon],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  id = input.required<number>();
  books: Signal<BookModel[]>;
  book = computed(() => this.books().find(book => book.id == this.id()));
  constructor(private store: Store<State>) {
    this.books = this.store.selectSignal(booksEntity.selectors.selectAll);
  }
}
