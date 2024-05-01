import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ActivatedRoute } from '@angular/router';
import { authorsEntity, booksEntity } from '../../store/entities';
import { BookModel } from '../../models/book.model';
import { Observable, switchMap } from 'rxjs';
import { AuthorModel } from '../../models/author.model';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class BookComponent {
  book$: Observable<BookModel | undefined>;
  author$: Observable<AuthorModel | undefined>;
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.book$ = this.store.select(booksEntity.selectors.selectById(bookId));
    this.author$ = this.book$.pipe(
      switchMap(book =>
        this.store.select(authorsEntity.selectors.selectById(book?.authorId))
      )
    );
  }
}
