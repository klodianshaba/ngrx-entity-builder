import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGlobal from '../reducers/global.reducer';

export const selectGlobalState = createFeatureSelector<fromGlobal.GlobalState>(
  fromGlobal.globalFeatureKey
);

export const selectTotalBooks = createSelector(
  selectGlobalState,
  (state) => state.totalBooks
);
