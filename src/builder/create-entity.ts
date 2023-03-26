import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {entityActions} from "./entity-actions";
import {createReducer, on} from "@ngrx/store";
import {ActionCreator} from "@ngrx/store/src/models";
import {ReducerTypes} from "@ngrx/store/src/reducer_creator";
import {entitySelectors} from "./entity-selectors";
import {MemoizedSelector} from "@ngrx/store/src/selector";
export const createEntity = <T, A extends object> (featureSelector: MemoizedSelector<object, object>, featureKey: string, overwriteInitial: A = {} as A, ...ons: ReducerTypes<EntityState<T> & A, readonly ActionCreator[]>[]) => {
    const adapter: EntityAdapter<T> = createEntityAdapter<T>();
    const actions = entityActions<T, A>(featureKey);
    const selectors = entitySelectors<T, A>(featureSelector, featureKey, adapter);
    const initial = adapter.getInitialState( {...overwriteInitial});
    type state = EntityState<T> & A;
    const reducer = createReducer<state>(
        initial,
        on(actions.setAll, (state, {entities}) => ({
            ...state, ...adapter.setAll(entities, state)
        })),
        on(actions.setMany, (state, {entities}) => ({
            ...state, ...adapter.setMany(entities, state)
        })),
        on(actions.setOne, (state, {entity}) => ({
            ...state, ...adapter.setOne(entity, state)
        })),
        on(actions.addOne, (state, {entity}) => ({
            ...state, ...adapter.addOne(entity, state)
        })),
        on(actions.addMany, (state, {entities}) => ({
            ...state, ...adapter.addMany(entities, state)
        })),
        on(actions.unshift, (state, {entities}) => ({
            ...state, ...adapter.setAll([...entities, ...adapter.getSelectors().selectAll(state)], state)
        })),
        on(actions.updateOne, (state, {update}) => ({
            ...state, ...adapter.updateOne(update, state)
        })),
        on(actions.updateMany, (state, {updates}) => ({
            ...state, ...adapter.updateMany(updates, state)
        })),
        on(actions.updateAdditional, (state, {updates}) => ({
            ...state, ...updates
        })),
        on(actions.upsertOne, (state, {entity}) => ({
            ...state, ...adapter.upsertOne(entity, state)
        })),
        on(actions.upsertMany, (state, {entities}) => ({
            ...state, ...adapter.upsertMany(entities, state)
        })),
        on(actions.mapOne, (state, {entityMap}) => ({
            ...state, ...adapter.mapOne(entityMap, state)
        })),
        on(actions.mapMany, (state, {entityMap}) => ({
            ...state, ...adapter.map(entityMap, state)
        })),
        on(actions.removeOne, (state, {id}) => ({
            ...state,  ...adapter.removeOne(id, state)
        })),
        on(actions.removeMany, (state, {ids}) => ({
            ...state, ...adapter.removeMany(ids, state)
        })),
        on(actions.removePredicate, (state, {predicate}) => ({
            ...state, ...adapter.removeMany(predicate, state)
        })),
        on(actions.clear, (state) => ({
            ...state, ...initial
        })),
        ...ons
    );
    return {featureKey, initial, adapter, actions, selectors, reducer};
}
