import { createAction, props } from '@ngrx/store';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const featureActions = <T, A>(featureKey: string) => {
  const load = createAction(
    '[' + featureKey + ' / Store] Load ' + featureKey,
    props<{ data: T & A }>()
  );
  const update = createAction(
    '[' + featureKey + ' / Store] Update ' + featureKey,
    props<{ updates: Partial<T & A> }>()
  );
  const updateAdditional = createAction(
    '[' + featureKey + ' / Store] Update Additional ' + featureKey,
    props<{ updates: Partial<A> }>()
  );
  const clear = createAction(
    '[' + featureKey + ' / Store] Clear ' + featureKey
  );
  return { load, update, updateAdditional, clear };
};
