import { createAction, props } from '@ngrx/store';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const entityActions = <T, A>(featureKey: string) => {
  const setAllAction = createAction(
    '[' + featureKey + ' / Store] Set All ' + featureKey,
    props<{ entities: T[] }>()
  );
  const setAll = (entities: T[]) => {
    return setAllAction({ entities });
  };
  const setManyAction = createAction(
    '[' + featureKey + ' / Store] Set Many ' + featureKey,
    props<{ entities: T[] }>()
  );
  const setMany = (entities: T[]) => {
    return setManyAction({ entities });
  };
  const setOneAction = createAction(
    '[' + featureKey + ' / Store] Set One ' + featureKey,
    props<{ entity: T }>()
  );
  const setOne = (entity: T) => {
    return setOneAction({ entity });
  };
  const addOneAction = createAction(
    '[' + featureKey + ' / Store] Add One ' + featureKey,
    props<{ entity: T }>()
  );
  const addOne = (entity: T) => {
    return addOneAction({ entity });
  };
  const addManyAction = createAction(
    '[' + featureKey + ' / Store] Add Many ' + featureKey,
    props<{ entities: T[] }>()
  );
  const addMany = (entities: T[]) => {
    return addManyAction({ entities });
  };
  const unshiftAction = createAction(
    '[' + featureKey + ' / Store] Un Shift ' + featureKey,
    props<{ entities: T[] }>()
  );
  const unshift = (entities: T[]) => {
    return unshiftAction({ entities });
  };
  const updateOneAction = createAction(
    '[' + featureKey + ' / Store] Update One ' + featureKey,
    props<{ update: Update<T> }>()
  );
  const updateOne = (update: Update<T>) => {
    return updateOneAction({ update });
  };
  const updateManyAction = createAction(
    '[' + featureKey + ' / Store] Update Many ' + featureKey,
    props<{ updates: Update<T>[] }>()
  );
  const updateMany = (updates: Update<T>[]) => {
    return updateManyAction({ updates });
  };
  const updateAdditionalAction = createAction(
    '[' + featureKey + ' / Store] Update Additional ' + featureKey,
    props<{ updates: A }>()
  );
  const updateAdditional = (updates: A) => {
    return updateAdditionalAction({ updates });
  };
  const upsertOneAction = createAction(
    '[' + featureKey + ' / Store] Upsert One ' + featureKey,
    props<{ entity: T }>()
  );
  const upsertOne = (entity: T) => {
    return upsertOneAction({ entity });
  };
  const upsertManyAction = createAction(
    '[' + featureKey + ' / Store] Upsert Many ' + featureKey,
    props<{ entities: T[] }>()
  );
  const upsertMany = (entities: T[]) => {
    return upsertManyAction({ entities });
  };
  const mapOneAction = createAction(
    '[' + featureKey + ' / Store] Map One ' + featureKey,
    props<{ entityMap: EntityMapOne<T> }>()
  );
  const mapOne = (entityMap: EntityMapOne<T>) => {
    return mapOneAction({ entityMap });
  };
  const mapManyAction = createAction(
    '[' + featureKey + ' / Store] Map Many ' + featureKey,
    props<{ entityMap: EntityMap<T> }>()
  );
  const mapMany = (entityMap: EntityMap<T>) => {
    return mapManyAction({ entityMap });
  };
  const removeOneAction = createAction(
    '[' + featureKey + ' / Store] Remove One ' + featureKey,
    props<{ id: number }>()
  );
  const removeOne = (id: number) => {
    return removeOneAction({ id });
  };
  const removeManyAction = createAction(
    '[' + featureKey + ' / Store] Remove Many ' + featureKey,
    props<{ ids: number[] }>()
  );
  const removeMany = (ids: number[]) => {
    return removeManyAction({ ids });
  };
  const removePredicateAction = createAction(
    '[' + featureKey + ' / Store] Remove Predicate ' + featureKey,
    props<{ predicate: Predicate<T> }>()
  );
  const removePredicate = (predicate: Predicate<T>) => {
    return removePredicateAction({ predicate });
  };
  const clear = createAction(
    '[' + featureKey + ' / Store] Clear ' + featureKey
  );
  return {
    setAll,
    setAllAction,
    setMany,
    setManyAction,
    setOne,
    setOneAction,
    addOne,
    addOneAction,
    addMany,
    addManyAction,
    unshift,
    unshiftAction,
    updateOne,
    updateOneAction,
    updateMany,
    updateManyAction,
    updateAdditional,
    updateAdditionalAction,
    upsertOne,
    upsertOneAction,
    upsertMany,
    upsertManyAction,
    mapOne,
    mapOneAction,
    mapMany,
    mapManyAction,
    removeOne,
    removeOneAction,
    removeMany,
    removeManyAction,
    removePredicate,
    removePredicateAction,
    clear,
  };
};
