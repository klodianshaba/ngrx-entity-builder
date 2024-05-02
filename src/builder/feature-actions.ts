import { createAction, props } from '@ngrx/store';

export const featureActions = <T, A>(featureKey: string) => {
  const loadAction = createAction(
    '[' + featureKey + ' / Store] Load ' + featureKey,
    props<{ data: T & A }>()
  );
  const load = (data: T & A) => {
    return loadAction({ data });
  };
  const updateAction = createAction(
    '[' + featureKey + ' / Store] Update ' + featureKey,
    props<{ updates: Partial<T & A> }>()
  );
  const update = (updates: Partial<T & A>) => {
    return updateAction({ updates });
  };
  const updateAdditionalAction = createAction(
    '[' + featureKey + ' / Store] Update Additional ' + featureKey,
    props<{ updates: Partial<A> }>()
  );
  const updateAdditional = (updates: Partial<A>) => {
    return updateAdditionalAction({ updates });
  };
  const clear = createAction(
    '[' + featureKey + ' / Store] Clear ' + featureKey
  );
  return {
    load,
    loadAction,
    update,
    updateAction,
    updateAdditional,
    updateAdditionalAction,
    clear,
  };
};
