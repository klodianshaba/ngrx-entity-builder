import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { entityActions } from './entity-actions';
import { createReducer, on } from '@ngrx/store';
import { ActionCreator } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';
import { entitySelectors } from './entity-selectors';
import { MemoizedSelector } from '@ngrx/store/src/selector';
export const createEntity = <S, T, A extends object>(
  featureSelector: MemoizedSelector<S, S>,
  featureKey: string,
  overwriteInitial: A = {} as A,
  ...ons: ReducerTypes<EntityState<T> & A, readonly ActionCreator[]>[]
) => {
  const adapter: EntityAdapter<T> = createEntityAdapter<T>();
  const actions = entityActions<T, A>(featureKey);
  const selectors = entitySelectors<S, T, A>(
    featureSelector,
    featureKey,
    adapter
  );
  const initial = adapter.getInitialState({ ...overwriteInitial });
  type state = EntityState<T> & A;
  const reducer = createReducer<state>(
    initial,
    on(actions.setAllAction, (state, { entities }) => ({
      ...state,
      ...adapter.setAll(entities, state),
    })),
    on(actions.setManyAction, (state, { entities }) => ({
      ...state,
      ...adapter.setMany(entities, state),
    })),
    on(actions.setOneAction, (state, { entity }) => ({
      ...state,
      ...adapter.setOne(entity, state),
    })),
    on(actions.addOneAction, (state, { entity }) => ({
      ...state,
      ...adapter.addOne(entity, state),
    })),
    on(actions.addManyAction, (state, { entities }) => ({
      ...state,
      ...adapter.addMany(entities, state),
    })),
    on(actions.unshiftAction, (state, { entities }) => ({
      ...state,
      ...adapter.setAll(
        [...entities, ...adapter.getSelectors().selectAll(state)],
        state
      ),
    })),
    on(actions.updateOneAction, (state, { update }) => ({
      ...state,
      ...adapter.updateOne(update, state),
    })),
    on(actions.updateManyAction, (state, { updates }) => ({
      ...state,
      ...adapter.updateMany(updates, state),
    })),
    on(actions.updateAdditionalAction, (state, { updates }) => ({
      ...state,
      ...updates,
    })),
    on(actions.upsertOneAction, (state, { entity }) => ({
      ...state,
      ...adapter.upsertOne(entity, state),
    })),
    on(actions.upsertManyAction, (state, { entities }) => ({
      ...state,
      ...adapter.upsertMany(entities, state),
    })),
    on(actions.mapOneAction, (state, { entityMap }) => ({
      ...state,
      ...adapter.mapOne(entityMap, state),
    })),
    on(actions.mapManyAction, (state, { entityMap }) => ({
      ...state,
      ...adapter.map(entityMap, state),
    })),
    on(actions.removeOneAction, (state, { id }) => ({
      ...state,
      ...adapter.removeOne(id, state),
    })),
    on(actions.removeManyAction, (state, { ids }) => ({
      ...state,
      ...adapter.removeMany(ids, state),
    })),
    on(actions.removePredicateAction, (state, { predicate }) => ({
      ...state,
      ...adapter.removeMany(predicate, state),
    })),
    on(actions.clear, state => ({
      ...state,
      ...initial,
    })),
    ...ons
  );
  return { featureKey, initial, adapter, actions, selectors, reducer };
};
