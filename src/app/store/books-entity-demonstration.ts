import { createEntity } from '../../builder/create-entity';
import { State } from './index';
import { BookModel } from '../models/book.model';
import { AdditionalModel } from '../models/additional.model';
import { selectState } from './selectors';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  book,
  bookPartial,
  books,
  id,
  ids,
} from './books-entity-demostration-model';

export const booksFeatureKey = 'books';

export const booksEntity = createEntity<State, BookModel, AdditionalModel>(
  selectState,
  booksFeatureKey
);

export class Component {
  store = inject(Store<State>);

  manipulating() {
    this.store.dispatch(booksEntity.actions.setAll(books)); // set all entities
    this.store.dispatch(booksEntity.actions.setMany(books)); // set many entities
    this.store.dispatch(booksEntity.actions.setOne(book)); // set one entity
    this.store.dispatch(booksEntity.actions.addOne(book)); // add one entity
    this.store.dispatch(booksEntity.actions.addMany(books)); // add many entities
    this.store.dispatch(booksEntity.actions.unshift(books)); // unshift entities
    this.store.dispatch(
      booksEntity.actions.updateOne({ id, changes: bookPartial })
    ); // update one entity
    this.store.dispatch(
      booksEntity.actions.updateMany([
        { id, changes: bookPartial },
        { id, changes: bookPartial },
      ])
    ); // update many entities
    this.store.dispatch(booksEntity.actions.updateAdditional(bookPartial)); // update additional props
    this.store.dispatch(booksEntity.actions.upsertOne(book)); // upsert one entity
    this.store.dispatch(booksEntity.actions.upsertMany(books)); // upsert many entities
    this.store.dispatch(
      booksEntity.actions.mapOne({
        id,
        map: entity => {
          return { ...entity, ...bookPartial };
        },
      })
    ); // map one entity
    this.store.dispatch(
      booksEntity.actions.mapMany(entity => {
        return { ...entity, ...bookPartial };
      })
    ); // map many entities
    this.store.dispatch(booksEntity.actions.removeOne(id)); // remove one entity
    this.store.dispatch(booksEntity.actions.removeMany(ids)); // remove many entities
    this.store.dispatch(
      booksEntity.actions.removePredicate(entity => entity.year != 2024)
    ); // remove predicate entities
    this.store.dispatch(booksEntity.actions.clear()); // clear entities
  }

  selecting() {
    this.store.selectSignal(booksEntity.selectors.entities); // get all entities
    this.store.selectSignal(booksEntity.selectors.all); // get all entities
    this.store.selectSignal(booksEntity.selectors.count); // get count
    this.store.selectSignal(booksEntity.selectors.state); // get state
    this.store.selectSignal(booksEntity.selectors.ids); // get ids
    this.store.selectSignal(booksEntity.selectors.select(id)); // select by id
    this.store.selectSignal(booksEntity.selectors.selectMany(ids)); // select by ids
    this.store.selectSignal(
      booksEntity.selectors.selectPredicate(book => book.year == 2024)
    ); // select by predicate
  }
}
