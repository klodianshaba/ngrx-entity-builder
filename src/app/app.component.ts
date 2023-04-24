import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "./store";
import {selectTotalBooks} from "./store/selectors/global.selectors";
import {loadTotalBooks} from "./store/actions/global.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-entity-builder';
  totalBooks: number = -1;

  constructor(private store: Store<State>) {
    this.store.select(selectTotalBooks).subscribe(totalBooks => {
      this.totalBooks = totalBooks;
    })
  }
  loadTotalBooks(): void {
    this.store.dispatch(loadTotalBooks({totalBooks: 50}));
  }
}
