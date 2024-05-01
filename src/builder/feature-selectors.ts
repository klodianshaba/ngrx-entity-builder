import { MemoizedSelector } from '@ngrx/store/src/selector';
import { EntityAdapter, EntityState, Predicate } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';

export const featureSelectors = <T, A>(
  featureSelector: MemoizedSelector<object, object>,
  featureKey: string
) => {
  const selectState = createSelector<object, object, T & A>(
    featureSelector,
    state => (featureKey ? state[featureKey] : state)
  );

  const selectByProperty = (property: string) =>
    createSelector(selectState, data => (data ? data[property] : data));
  return { selectState, selectByProperty };
};
