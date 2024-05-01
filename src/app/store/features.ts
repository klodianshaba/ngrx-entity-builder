import { createSelector } from '@ngrx/store';
import { State } from './index';

export const selectState = createSelector(
  (state: State) => state,
  (state: State) => state
);
