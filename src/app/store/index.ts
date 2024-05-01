import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  authorsEntity,
  authorsFeatureKey,
  booksEntity,
  booksFeatureKey,
} from './entities';
import { EntityState } from '@ngrx/entity';
import { BookModel } from '../models/book.model';
import { AuthorModel } from '../models/author.model';
export interface State {
  [booksFeatureKey]: EntityState<BookModel>;
  [authorsFeatureKey]: EntityState<AuthorModel>;
}
export const reducers: ActionReducerMap<State> = {
  [booksFeatureKey]: booksEntity.reducer,
  [authorsFeatureKey]: authorsEntity.reducer,
};
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
