import { createEntity } from '../../builder/create-entity';
import { selectState } from './selectors';
import { BookModel } from '../models/book.model';
import { State } from './index';
import { AdditionalModel } from '../models/additional.model';

export const booksFeatureKey = 'books';

export const booksEntity = createEntity<State, BookModel, AdditionalModel>(
  selectState,
  booksFeatureKey
);
