import {createFeature, createFeatureSelector, createReducer, on} from '@ngrx/store';
import * as GlobalActions from '../actions/global.actions';
import {loadTotalBooks} from "../actions/global.actions";

export const globalFeatureKey = 'globalState';

export interface GlobalState {
  totalBooks: number
}

export const initialState: GlobalState = {
  totalBooks: 10
};

export const globalReducer = createReducer(
  initialState,
  on(GlobalActions.loadTotalBooks, (state, action) => ({...state, totalBooks: action.totalBooks})),
);

export const globalFeature = createFeature({
  name: globalFeatureKey,
  reducer: globalReducer,
});

