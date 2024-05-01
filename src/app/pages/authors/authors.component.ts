import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { toSignal } from '@angular/core/rxjs-interop';
import { authorsEntity } from '../../store/entities';
import { AuthorModel } from '../../models/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  standalone: true,
})
export class AuthorsComponent {
  authors: Signal<AuthorModel[] | undefined>;
  constructor(private store: Store<State>) {
    this.authors = toSignal(
      this.store.select(authorsEntity.selectors.selectAll)
    );
  }
}
