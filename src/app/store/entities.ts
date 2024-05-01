import { createEntity } from '../../builder/create-entity';
import { selectState } from './features';
import { BookModel } from '../models/book.model';
import { State } from './index';
import { AuthorModel } from '../models/author.model';
import { AdditionalModel } from '../models/additional.model';

export const booksFeatureKey = 'books';
export const authorsFeatureKey = 'authors';

export const booksEntity = createEntity<State, BookModel, AdditionalModel>(
  selectState,
  booksFeatureKey
);
export const authorsEntity = createEntity<State, AuthorModel, AdditionalModel>(
  selectState,
  authorsFeatureKey
);
