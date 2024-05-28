import { createSelector } from '@ngrx/store';
import { EntityAdapter, EntityState, Predicate } from '@ngrx/entity';
import { MemoizedSelector } from '@ngrx/store/src/selector';
export const entitySelectors = <S, T, A>(
  featureSelector: MemoizedSelector<S, S>,
  featureKey: string,
  adapter: EntityAdapter<T>
) => {
  const state = createSelector<S, S, EntityState<T> & A>(
    featureSelector,
    // @ts-ignore
    state => (featureKey ? state[featureKey] : state)
  );
  const adapterSelectors = adapter.getSelectors();
  const entities = createSelector(state, adapterSelectors.selectEntities);
  const all = createSelector(state, adapterSelectors.selectAll);
  const ids = createSelector(state, adapterSelectors.selectIds);
  const count = createSelector(state, adapterSelectors.selectTotal);
  const select = (id: number | undefined | null) =>
    createSelector(all, data => data.find(item => (item as any)?.id == id));
  const selectMany = (ids: number[]) =>
    createSelector(all, data =>
      data.filter(item => ids.includes((item as any)?.id))
    );
  const selectPredicate = (predicate: Predicate<T>) =>
    createSelector(all, data => data.filter(data => predicate(data)));
  return {
    state,
    entities,
    all,
    ids,
    count,
    select,
    selectMany,
    selectPredicate,
  };
};
