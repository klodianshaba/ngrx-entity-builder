import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { booksEntity, booksFeatureKey } from './entities';
import { EntityState } from '@ngrx/entity';
import { BookModel } from '../models/book.model';

export interface State {
  [booksFeatureKey]: EntityState<BookModel>;
}
export const reducers: ActionReducerMap<State> = {
  [booksFeatureKey]: booksEntity.reducer,
};
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
