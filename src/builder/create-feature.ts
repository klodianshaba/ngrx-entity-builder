import {MemoizedSelector} from "@ngrx/store/src/selector";
import {ReducerTypes} from "@ngrx/store/src/reducer_creator";
import {ActionCreator} from "@ngrx/store/src/models";
import {createReducer, on} from "@ngrx/store";
import {featureActions} from "./feature-actions";
import {featureSelectors} from "./feature-selectors";

export const createFeature = <T, A extends object> (featureSelector: MemoizedSelector<object, object>, featureKey: string, overwriteInitial: T & A  = {} as T & A, ...ons: ReducerTypes<T & A, readonly ActionCreator[]>[]) => {
    const actions = featureActions<T, A>(featureKey);
    const selectors = featureSelectors<T, A>(featureSelector, featureKey);
    type state = T & A;
    const reducer = createReducer<state>(
        overwriteInitial,
        on(actions.load, (state, {data}) => ({
            ...state, ...data
        })),
        on(actions.update, (state, {updates}) => ({
            ...state, ...updates
        })),
        on(actions.clear, (state) => ({
            ...state, ...overwriteInitial
        })),
        ...ons
    );
    return {featureKey, initial: overwriteInitial, actions, selectors, reducer};
}
