import { createEntity } from '../../builder/create-entity';
import { entityMethods } from '../../builder/signals/entity-methods';
import { entityComputed } from '../../builder/signals/entity-computed';
import { selectState } from './selectors';
import { BookModel } from '../models/book.model';
import { TodoModel } from '../models/todo-model';
import { State } from './index';
import { AdditionalModel } from '../models/additional.model';
import { signalStore, withComputed, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

export const TodoStore = signalStore(
  withEntities<TodoModel>(),
  withComputed(store => entityComputed<TodoModel>(store)),
  withMethods(store => entityMethods<TodoModel>(store))
);

export const booksFeatureKey = 'books';

export const booksEntity = createEntity<State, BookModel, AdditionalModel>(
  selectState,
  booksFeatureKey
);
