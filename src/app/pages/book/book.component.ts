import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ActivatedRoute } from '@angular/router';
import { authorsEntity, booksEntity } from '../../store/entities';
import { BookModel } from '../../models/book.model';
import { switchMap } from 'rxjs';
import { AuthorModel } from '../../models/author.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
})
export class BookComponent {
  book: Signal<BookModel | undefined>;
  author: Signal<AuthorModel | undefined>;
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    const book$ = this.store.select(booksEntity.selectors.selectById(bookId));
    this.book = toSignal(book$);
    this.author = toSignal(
      book$.pipe(
        switchMap(book =>
          this.store.select(authorsEntity.selectors.selectById(book?.authorId))
        )
      )
    );
  }
}
