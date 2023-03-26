import {createAction, props} from "@ngrx/store";
import {EntityMap, EntityMapOne, Predicate, Update} from "@ngrx/entity";

export const entityActions = <T, A> (featureKey: string) => {
    const setAll = createAction('[' + featureKey + ' / Store] Set All ' + featureKey, props<{ entities: T[] }>());
    const setMany = createAction('[' + featureKey + ' / Store] Set Many '+ featureKey, props<{ entities: T[] }>());
    const setOne = createAction('[' + featureKey + ' / Store] Set One '+ featureKey, props<{ entity: T }>());
    const addOne = createAction('[' + featureKey + ' / Store] Add One '+ featureKey, props<{ entity: T }>());
    const addMany = createAction('[' + featureKey + ' / Store] Add Many '+ featureKey, props<{ entities: T[] }>());
    const unshift = createAction('[' + featureKey + ' / Store] Un Shift '+ featureKey, props<{ entities: T[] }>());
    const updateOne = createAction('[' + featureKey + ' / Store] Update One '+ featureKey, props<{ update: Update<T> }>());
    const updateMany = createAction('[' + featureKey + ' / Store] Update Many '+ featureKey, props<{ updates: Update<T>[] }>());
    const updateAdditional = createAction('[' + featureKey + ' / Store] Update Additional '+ featureKey, props<{ updates: A }>());
    const upsertOne = createAction('[' + featureKey + ' / Store] Upsert One '+ featureKey, props<{ entity: T }>());
    const upsertMany = createAction('[' + featureKey + ' / Store] Upsert Many '+ featureKey, props<{ entities: T[] }>());
    const mapOne = createAction('[' + featureKey + ' / Store] Map One '+ featureKey, props<{ entityMap: EntityMapOne<T> }>());
    const mapMany = createAction('[' + featureKey + ' / Store] Map Many '+ featureKey, props<{ entityMap: EntityMap<T> }>());
    const removeOne = createAction('[' + featureKey + ' / Store] Remove One '+ featureKey, props<{ id: number }>());
    const removeMany = createAction('[' + featureKey + ' / Store] Remove Many '+ featureKey, props<{ ids: number[] }>());
    const removePredicate = createAction('[' + featureKey + ' / Store] Remove Predicate '+ featureKey, props<{ predicate: Predicate<T> }>());
    const clear = createAction('[' + featureKey + ' / Store] Clear '+ featureKey);
    return {setAll, setMany, setOne, addOne, addMany, unshift, updateOne, updateMany, updateAdditional, upsertOne, upsertMany, mapOne, mapMany, removeOne, removeMany, removePredicate, clear}
}