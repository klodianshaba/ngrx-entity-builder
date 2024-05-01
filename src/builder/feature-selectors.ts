import { MemoizedSelector } from '@ngrx/store/src/selector';
import { createSelector } from '@ngrx/store';

export const featureSelectors = <T, A>(
  featureSelector: MemoizedSelector<object, object>,
  featureKey: string
) => {
  const selectState = createSelector<object, object, T & A>(
    featureSelector,
    // @ts-ignore
    state => (featureKey ? state[featureKey] : state)
  );

  const selectByProperty = (property: string) =>
    // @ts-ignore
    createSelector(selectState, data => (data ? data[property] : data));
  return { selectState, selectByProperty };
};
