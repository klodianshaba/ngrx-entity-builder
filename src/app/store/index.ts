import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {
  globalFeatureKey,
  globalReducer,
  GlobalState,
} from './reducers/global.reducer';
export interface State {
  [globalFeatureKey]: GlobalState;
}
export const reducers: ActionReducerMap<State> = {
  [globalFeatureKey]: globalReducer,
};
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
