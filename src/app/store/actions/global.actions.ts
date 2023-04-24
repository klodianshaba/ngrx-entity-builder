import { createAction, props } from '@ngrx/store';

export const loadTotalBooks = createAction(
  '[Global] Load Total Books',
  props<{ totalBooks: number }>()
);
